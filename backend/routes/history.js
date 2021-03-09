const router = require('express').Router();
let History = require('../models/history.model');


router.route('/').get((req, res) => {
  History.find()
    .then(historys => res.json(historys))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/historys/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const newHistory = new History({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newHistory.save()
    .then(() => res.json('History added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;