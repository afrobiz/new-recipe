const User = require('../models').User;
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const Validator = require('validatorjs')

const createUserRules = {
  username: 'required|between:3,40',
  password: 'required|between:8,15',
  // email: 'required|email',
  // phoneNo: 'required|between:7,13',
};

module.exports = {
	create(req, res) {
    const obj = req.body;
    const validator = new Validator(obj, createUserRules);
    if (validator.passes()) {
      // validation passes
    return User.create({
        username: req.body.username, 
        password: req.body.password,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
      })
      .then(response => res.status(201).send(response))
      .catch(error => res.status(400).send(error));
    } else {
      // error... validation fails
      const errors = validator.errors.all();
      res.status(400).send(errors)
    }
	},

	login(req, res) {
    const createToken = user => jwt.sign(user, 'secret', { expiresIn: '24h' });
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Enter all required field' });
    }
    User.findOne({
      attributes: ['username', 'password', 'email', 'phoneNo'],
      where: {
        username: req.body.username
      }
    })
      .then((existingUser) => {
        if (!existingUser || existingUser === null) {
          return res.status(404).send({
            message: 'User record not found!'
          });
        }
        if (existingUser.password == req.body.password) {
          const userDetails = {
            username: existingUser.username,
            email: existingUser.email,
            phoneNo: existingUser.phoneNo,
          };
          const jsonToken = createToken(userDetails)
          return res.status(200).send({
            message: 'Logged in!', jsonToken
          });
        }
        return res.status(401).send({
          message: 'Invalid Password!'
        });
      })
      .catch(error => res.status(400).send({ message: 'Error', error }));
  },

  list(req, res) {
  return User
    .all({attributes: ['username', 'password', 'email', 'phoneNo']})
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
},

};

