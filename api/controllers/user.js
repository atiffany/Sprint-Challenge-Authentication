const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username } = req;
  const { password } = req;
  const user = new User({ username, password });
  user.save()
    .then((newUser) => {
      res.status(200).json(newUser);
    })
    .catch(error => {
      res.status(422).json(error);
    });
};

module.exports = {
  createUser
};
