const express = require("express");
const router = express.Router();

const animalsData = require("../data/pets.json");
const shopData = require("../data/shopProducts.json");

/*to access the dogs and cats endpoints, you should use the following URLs:

Dogs: localhost:5005/api/dogs
Cats: localhost:5005/api/cats*/

router.get("/dogs", (req, res, next) => {
  const dogs = animalsData.dogs;
  res.json(dogs);
});

router.get("/cats", (req, res, next) => {
  const cats = animalsData.cats;
  res.json(cats);
});
router.get("/small_pets", (req, res, next) => {
  const smallPets = animalsData.small_pets;
  res.json(smallPets);
});
router.get("/all_pets", (req, res, next) => {
  const smallPets = animalsData;
  res.json(smallPets);
});
router.get("/shop_products", (req, res, next) => {
  const shop_products = shopData;
  res.json(shop_products);
});
module.exports = router;
