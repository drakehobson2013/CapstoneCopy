const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const restaurantSchema = new Schema({

        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: Number, required: true },
        address: { type: Date, required: true },
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: Number, required: true},

      }, {
        timestamps: true,
      });


const User = mongoose.model('User', restaurantSchema);


module.exports = User;