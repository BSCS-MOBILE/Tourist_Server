const Mongoose = require('mongoose');

const touristSchema = new Mongoose.Schema({
    _id: Mongoose.Schema.Types.ObjectId,
    touristName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

touristSchema.set('toJSON', { virtuals: true })

module.exports = Mongoose.model('tourist', touristSchema);