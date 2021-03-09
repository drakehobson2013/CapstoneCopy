const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const eatRouter = require('./routes/eat');  
const shopRouter = require('./routes/shop');  
const attractionsRouter = require('./routes/attractions');  
const historyRouter = require('./routes/history');  

app.use('/eat', eatRouter);
app.use('/shop', shopRouter);
app.use('/attractions', attractionsRouter);
app.use('/history', historyRouter);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});