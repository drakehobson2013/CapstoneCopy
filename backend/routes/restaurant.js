const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');


router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/restaurants/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const newRestaurant = new Restaurant({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;