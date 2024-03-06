const HotelConfig = require('../models/HotelConfig');

exports.createHotelConfig = async (req, res) => {
    console.log(req.body); // Логирование тела запроса для отладки
    try {
        const newConfig = new HotelConfig(req.body);
        const savedConfig = await newConfig.save();
        res.status(201).json(savedConfig);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllHotelConfigs = async (req, res) => {
    try {
        const configs = await HotelConfig.find();
        res.status(200).json(configs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getHotelConfigById = async (req, res) => {
    try {
        const config = await HotelConfig.findById(req.params.id);
        if (!config) {
            return res.status(404).json({ message: 'Конфигурация не найдена' });
        }
        res.status(200).json(config);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateHotelConfigById = async (req, res) => {
    try {
        const updatedConfig = await HotelConfig.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedConfig) {
            return res.status(404).json({ message: 'Конфигурация не найдена для обновления' });
        }
        res.status(200).json(updatedConfig);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteHotelConfigById = async (req, res) => {
    try {
        const deletedConfig = await HotelConfig.findByIdAndDelete(req.params.id);
        if (!deletedConfig) {
            return res.status(404).json({ message: 'Конфигурация не найдена для удаления' });
        }
        res.status(200).json({ message: 'Конфигурация успешно удалена' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
