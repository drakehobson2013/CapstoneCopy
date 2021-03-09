const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const attractionSchema = new Schema({

        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: Number, required: true },
        address: { type: Date, required: true },
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: Number, required: true},

 
      });


const Attraction = mongoose.model('Attraction', attractionSchema);


module.exports = Attraction;