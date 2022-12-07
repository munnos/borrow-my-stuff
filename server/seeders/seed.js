const db = require("../config/connection");
const {
  User,
  ShopProduct,
  ShopCategory,
  ListingCategory,
  ListingProduct,
} = require("../models");

const userData = require("./userData.json");
const listedCategoryData = require("./listingCategoryData.json");
const listedProductData = require("./listedProductData.json");

const seedDatabase = async () => {
  db.once("open", async () => {
    await ShopCategory.deleteMany();

    const categories = await ShopCategory.insertMany([
      { name: "Money" },
      { name: "Branded Goods" },
    ]);

    console.log("Shop Categories seeded");

    await ShopProduct.deleteMany();

    const products = await ShopProduct.insertMany([
      {
        name: "Five Pounds",
        description: "Donate £5",
        image: "five-pounds.jpg",
        category: categories[0]._id,
        price: 5.0,
        quantity: 500,
      },
      {
        name: "Ten Pounds",
        description: "Donate £10",
        image: "ten-pounds.jpg",
        category: categories[0]._id,
        price: 10.0,
        quantity: 500,
      },
      {
        name: "Fifteen Pounds",
        category: categories[0]._id,
        description: "Donate £15",
        image: "fifteen-pounds.jpg",
        price: 15.0,
        quantity: 20,
      },
      {
        name: "Twenty Pounds",
        category: categories[0]._id,
        description: "Twenty Pounds",
        image: "twenty-pounds.jpg",
        price: 20.0,
        quantity: 50,
      },
      {
        name: "Jumper",
        category: categories[1]._id,
        description: "Jumper",
        image: "jumper.jpg",
        price: 14.99,
        quantity: 100,
      },
      {
        name: "mug",
        category: categories[1]._id,
        description: "Mug",
        image: "mug.jpg",
        price: 6.99,
        quantity: 30,
      },
      {
        name: "Tote Bag",
        category: categories[1]._id,
        description: "Tote Bag",
        image: "tote-bag.jpg",
        price: 5.0,
        quantity: 30,
      },
      {
        name: "note-book",
        category: categories[1]._id,
        description: "Note Book",
        image: "note-book.jpg",
        price: 9.99,
        quantity: 100,
      },
      {
        name: "Coasters",
        category: categories[1]._id,
        description: "Set of four coaster mats",
        image: "coasters.jpg",
        price: 20.0,
        quantity: 1000,
      },
    ]);

    console.log("Shop Products seeded");

    await User.deleteMany();
    await User.collection.insertMany(userData);
    await User.create({
      firstName: "Pamela",
      lastName: "Washington",
      email: "pamela@testmail.com",
      password: "password12345",
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id],
        },
      ],
    });
    console.log("Seeding Users...");
    console.table(userData);

    await ListingCategory.deleteMany();
    await ListingCategory.collection.insertMany(listedCategoryData);
    console.log("Seeding Listing Categories...");
    console.table(listedCategoryData);

    await ListingProduct.deleteMany();
    await ListingProduct.collection.insertMany(listedProductData);
    console.log("Seeding Listed Products...");
    console.table(listedProductData);

    console.log("Seeding complete! 🌱");
    process.exit();
  });
};

seedDatabase();
