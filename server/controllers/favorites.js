const Favorites = require('../models').Favorites;
module.exports = {
		create(req, res) {
		return Favorite.create({
				username: req.body.title,
				content: req.body.content,
			})
			.then(response => res.status(201).send(response))
			.catch(error => res.status(400).send(error));
	},










}