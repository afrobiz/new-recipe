const User = require('../models').User;
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const validator = require('validatorjs')


module.exports = {
  const createUserRules = {
  firstname: 'required|between:2,40',
  lastname: 'required|between:2,40',
  email: 'required|email'
};

	create(req, res) {
		return User.create({
				username: req.body.username, 
				password: req.body.password,
				email: req.body.email,
				phoneNo: req.body.phoneNo,
			})
			.then(response => res.status(201).send(response))
			.catch(error => res.status(400).send(error));
	},

	login(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Enter all required field' });
    }
    User.findOne({
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
            username: existingUser.username
          };
          return res.status(200).send({
            message: 'Logged in!', userDetails
          });
        }
        return res.status(401).send({
          message: 'Invalid Password!'
        });
      })
      .catch(error => res.status(400).send({ message: 'Error', error }));
  },

  list(req, res) {
  return User.findAll()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
},

};

