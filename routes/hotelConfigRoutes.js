const express = require('express');
const router = express.Router();
const hotelConfigController = require('../controllers/hotelConfigController');

// Создание новой конфигурации отеля
router.post('/', hotelConfigController.createHotelConfig);

// Получение всех конфигураций отелей
router.get('/', hotelConfigController.getAllHotelConfigs);

// Получение одной конфигурации отеля по ID
router.get('/:id', hotelConfigController.getHotelConfigById);

// Обновление конфигурации отеля по ID
router.put('/:id', hotelConfigController.updateHotelConfigById);

// Удаление конфигурации отеля по ID
router.delete('/:id', hotelConfigController.deleteHotelConfigById);

module.exports = router;
