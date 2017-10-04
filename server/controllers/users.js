  const Favorites = require('../models').Favorites;

  module.exports = {
	create(req, res) {
		console.log('jknvlf dlfhjvdfnfkjfd', Favorites)
		return Favorites.create({
				username: req.body.title, 
				password: req.body.title,
				email: req.body.title,
				phoneNo: req.body.title,
			})
			.then(todo => res.status(201).send(Favorites))
			.catch(error => res.status(400).send(error));
	},
};

