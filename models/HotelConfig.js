const mongoose = require('mongoose');

const hotelConfigSchema = new mongoose.Schema({
    cottages: [{
        name: String,
        electricalAppliances: [{
            name: String,
            power: Number // Ватты
        }],
        dailyWaterConsumption: Number, // Литры в день
        dailySewageConsumption: Number, // Литры в день
        internetCost: Number // Стоимость в месяц
    }],
    coefficients: {
        occupancyRateProjection: Number, // Процент
        employeeSalaries: [{
            position: String,
            salary: Number
        }],
        saunaElectricityConsumption: Number // Ватты
    },
    loanInfo: {
        annualInterestRate: Number, // Процентная ставка в год
        monthlyPayment: Number, // Ежемесячный платеж
        loanTerm: Number, // Срок займа в месяцах
        desiredRepaymentPeriod: Number // Желаемый период погашения в месяцах
    },
    revenue: {
        rentalRates: {
            highSeasonRate: Number,
            mediumSeasonRate: Number,
            lowSeasonRate: Number
        },
        seasonDuration: {
            highSeasonDuration: Number, // Дней
            mediumSeasonDuration: Number // Дней
        }
    }
});

const HotelConfig = mongoose.model('HotelConfig', hotelConfigSchema);

module.exports = HotelConfig;
