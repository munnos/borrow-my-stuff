const { AuthenticationError } = require('apollo-server-express');
const { User, ShopProduct, ShopCategory, ShopOrder, ListingCategory, ListingProduct, ListingRequest } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await ShopCategory.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await ShopProduct.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await ProductOrder.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new ShopOrder({ products: args.products });
      console.log(url);
      console.log(order);
      const line_items = [];

      const { products } = await order.populate('products');
      console.log(products);
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      console.log(line_items);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    },
    getAllListingCategories: async (parent, args, context) => {
      const results = await ListingCategory.find({});
      return results;
    },
    getAllListedProducts: async (parent, args, context) => {
      const results = await ListingProduct.find({});
      return results;
    },
    getListedProductsByCategory: async (parent, args, context) => {
      const results = await ListingProduct.find({category: args.category});
      return results;
    },
    getListedProductsByUser: async (parent, args, context) => {
      const results = await ListingProduct.find({user: args.user});
      return results;
    },
    getMyListedProducts: async (parent, args, context) => {
      if (context.user) {
        const results = await ListingProduct.find({user: context.user._id});
        return results;
      }
      throw new AuthenticationError('Not logged in');
    },
    getRequestsIMade: async (parent, args, context) => {
      if (context.user) {
        const results = await ListingRequest.find({requestee: context.user._id});
        return results;
      }

      throw new AuthenticationError('Not logged in');
    },
    getRequestsForProductIListed: async (parent, args, context) => {
      if (context.user) {
        const results = await ListingRequest.find({listingProduct: args.listingProduct});
        return results;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new ProductOrder({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await ProductOrder.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    listAProduct: async (parent, args, context) => {
      if (context.user) {
        return await ListingProduct.create();
      }

      throw new AuthenticationError('Not logged in');
    },
    requestAProduct: async (parent, args, context) => {
      if (context.user) {
        return await ListingRequest.create();
      }

      throw new AuthenticationError('Not logged in');
    },
    editRequestedProduct: async (parent, args, context) => {
      if (context.user) {
        const decision = args.decision;
        const newActiveValue = null;
        const newApprovedValue = null;
        return await ListingRequest.findByIdAndUpdate({_id: args.listingRequest, listingProduct: args.listingProduct}, {active: newActiveValue, approved: newApprovedValue}, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;
