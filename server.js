const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Замените 'ваша_строка_подключения' на вашу реальную строку подключения к MongoDB Atlas
mongoose.connect('mongodb+srv://testUser:gUrBqHZZsN2jmboD@cluster0.5ovlnze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const hotelConfigRoutes = require('./routes/hotelConfigRoutes');
app.use('/api/configurations', hotelConfigRoutes);


// Обработчик ошибок подключения
db.on('error', (error) => console.error('Ошибка подключения к MongoDB:', error));

// Обработчик успешного подключения
db.once('open', () => console.log('Успешно подключено к MongoDB.'));

app.use(express.json());

// Пример простого маршрута для тестирования сервера
app.get('/', (req, res) => {
    res.send('Сервер работает и успешно подключен к MongoDB!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
