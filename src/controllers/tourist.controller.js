const Mongoose = require('mongoose');
const Tourist = require('../models/tourist.model');
const TouristService = require('../services/tourist.service')

const getTourist = async (req, res, next) => {
    const tourist = await TouristService.getTourist()
    if (!tourist) {
        res.status(404).json({
            message: 'Tourist not found'
        });
    }
    res.status(200).json({
        message: 'Successfully fetched tourist',
        data: tourist
    });

};

const addTourist = async (req, res, next) => {
    const tourist = await TouristService.saveTourist(req.body)
    if (!tourist) {
        res.status(404).json({
            message: 'Tourist not found'
        });
    }
    res.status(200).json({
        message: 'Successfully added tourist',
        data: tourist
    });

};

const getTouristById = async (req, res, next) => {
    const tourist = await TouristService.getTouristById(req.params.id)
    if (!tourist) {
        res.status(404).json({
            message: 'Tourist not found'
        });
    }

    res.status(200).json({
        message: 'Successfully fetched tourist',
        data: tourist
    });
}

module.exports = {
    getTourist,
    getTouristById,
    addTourist
};