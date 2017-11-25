const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  console.log(req);
  res.render('index', {
    title: 'Homepage'
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
}

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
  // 1. Query database for all Stores
  const stores = await Store.find();
  res.render('stores', { title: 'Stores', stores })
};

exports.editStore = async (req, res) => {
  // 1. Find the store given the ID
  res.json(req.params);
  // 2. Confirm they are the owner of the stores
  // 3. Render out the edit form
}
