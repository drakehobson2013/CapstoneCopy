
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const historySchema = new Schema({

        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: Number, required: true },
        address: { type: Date, required: true },
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: Number, required: true},

    
      });


const History = mongoose.model('History', historySchema);


module.exports = History;