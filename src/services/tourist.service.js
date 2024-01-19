'use strict'
const Mongoose = require('mongoose');
const Tourist = require('../models/tourist.model');


const saveTourist = async (data) => {
  const tourist = new Tourist({
    _id: new Mongoose.Types.ObjectId,
    ...data
  });
  
  // Save
  return await tourist.save();
}

const getTourist = async() => {
    return await Tourist.find({})
  }
const getTouristById = async(id) => {
  return await Tourist.findById(id)
}


module.exports = {
  saveTourist,
  getTourist,
  getTouristById
};