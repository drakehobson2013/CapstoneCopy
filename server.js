const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri || 'mongodb://localhost/2021-capstone', { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const restaurantRouter = require('./client/routes/restaurant');  
const shopRouter = require('./client/routes/shop');  
const attractionRouter = require('./client/routes/attraction');  
const historyRouter = require('./client/routes/history');  

app.use('/restaurant', restaurantRouter);
app.use('/shop', shopRouter);
app.use('/attraction', attractionRouter);
app.use('/history', historyRouter);



if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});