const mongoose = require("mongoose");
const Animal = require("../models/Animal.model");
const data = require("../data/pets.json");

const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://admin-pet-app:IT3exFM61TgrwXVJ@cluster0.e34wnon.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);

    // Function to save animals of a specific category
    const saveAnimals = async (animals, category) => {
      for (let animal of animals) {
        const newAnimal = new Animal({
          _id: new mongoose.Types.ObjectId(),
          category: category,
          type: animal.type,
          age: animal.age,
          temper: animal.temper,
          special_needs: animal.special_needs,
          image: animal.image,
        });

        try {
          await newAnimal.save();
          console.log(`Saved ${category}: ${animal.name}`);
        } catch (err) {
          console.error(`Error saving ${category}: ${animal.name}`, err);
        }
      }
    };

    // Save dogs
    saveAnimals(data.dogs, "dog");

    // Save cats
    saveAnimals(data.cats, "cat");

    // Save small pets
    saveAnimals(data.small_pets, "small_pet");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });
