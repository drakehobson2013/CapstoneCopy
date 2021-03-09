const router = require('express').Router();
let Shop = require('../models/shop.model');


router.route('/').get((req, res) => {
  Shop.find()
    .then(shops => res.json(shops))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const newShop = new Shop({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newShop.save()
    .then(() => res.json('Shop added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;