const db = require("../config/connection");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  User,
  ShopProduct,
  ShopCategory,
  ListingCategory,
  ListingProduct,
} = require("../models");

const userData = require("./userData.json");
const listedCategoryData = require("./listingCategoryData.json");

  console.time('seeding');
  db.once("open", async () => {
  await ShopCategory.deleteMany({});

    const categories = await ShopCategory.insertMany([
      { name: "Money" },
      { name: "Branded Goods" },
    ]);

    await ShopProduct.deleteMany({});

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
        name: "Hoody",
        category: categories[1]._id,
        description: "Hoody",
        image: "hoody.jpg",
        price: 25.99,
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
        image: "coasters2.jpg",
        price: 20.0,
        quantity: 1000,
      },
    ]);

    // console.log("Shop Products seeded");
  
await ListingCategory.deleteMany();
const Lcategory = await ListingCategory.insertMany(listedCategoryData);
await User.deleteMany();
const usersWithHashedPasswordsPromiseArray = userData.map(
  async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    return user;
})
const usersWithHashedPasswords = await Promise.all(usersWithHashedPasswordsPromiseArray)
const users = await User.insertMany(usersWithHashedPasswords)

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

    await ListingProduct.deleteMany();
 const ListingProducts = await ListingProduct.insertMany([

  {
    "name": "Camera",
    "description": "A few scratches but works like new.",
    "image": "https://i.ibb.co/bF72Mbj/camera.jpg",
    "borrowDuration": "2 weeks",
    "category": Lcategory[2]._id,
    "user": users[0]._id
  },

  {
    "name": "Folding Chair",
    "description": "A white plastic fold up chair.",
    "image": "https://i.ibb.co/kQTfL1F/folding-Chair.jpg",
    "borrowDuration": "3 months",
    "category": Lcategory[1]._id,
    "user": users[1]._id
  },
  {
    "name": "Scooter",
    "description": "A small metal scooter suitable for a pre-teen.",
    "image": "https://i.ibb.co/y5hTLVq/scooter.jpg",
    "borrowDuration": "1 week",
    "category": Lcategory[4]._id,
    "user": users[3]._id
  },
  {
    "name": "8kg Kettlebell",
    "description": "Cast iron Kettlebell with a few small scratches.",
    "image": "https://i.ibb.co/9vqNrg0/kettlebell.jpg",
    "borrowDuration": "2 weeks",
    "category": Lcategory[7]._id,
    "user": users[7]._id
  },
  {
    "name": "Spade",
    "description": "Small green spade.",
    "image": "https://i.ibb.co/0VmMrLj/spade.jpg",
    "borrowDuration": "3 days",
    "category": Lcategory[0]._id,
    "user": users[6]._id
  },

  {
    "name": "DJ needed",
    "description": "I'm looking for a DJ for my daughter's birthday party.",
    "image": "https://i.ibb.co/FVC0kJb/dj.jpg",
    "borrowDuration": "1 day",
    "category": Lcategory[6]._id,
    "user": users[7]._id
  },
  {
    "name": "Car cleaning",
    "description": "I've got some free time, so I'm looking to spend it washing cars.",
    "image": "https://i.ibb.co/X50DFbq/car-Cleaning.jpg",
    "borrowDuration": "1 month",
    "category": Lcategory[5]._id,
    "user": users[7]._id
  },
  {
    "name": "Iron",
    "description": "Small iron with steaming functionality",
    "image": "https://i.ibb.co/Tvdy4fm/iron.jpg",
    "borrowDuration": "2 weeks",
    "category": Lcategory[3]._id,
    "user": users[8]._id
  }
 ])

// console.table(users);
// console.table(ListingProducts);
console.timeEnd('seeding complete 🌱');
process.exit(0);
});
