const router = require('express').Router();
let Attraction = require('../models/attraction.model');


router.route('/').get((req, res) => {
  Attraction.find()
    .then(attractions => res.json(attractions))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/attractions/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const newAttraction = new Attraction({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newAttraction.save()
    .then(() => res.json('Attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;