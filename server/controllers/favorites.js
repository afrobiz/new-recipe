const Favorites = require('../models').Favorites;
const Recipe = require('../models').Favorites;

module.exports = {
	create(req, res) {
		return Recipe
	    .findById(req.body.recipeid, {
	      attributes: ['title']
	    })
	    .then(recipe => {
	      if (!recipe) {
	        return res.status(404).send({
	          message: 'Recipe Not Found',
	        });
	      }

				Favorites.create({
					userid: req.param.userid,
					recipeid: req.body.recipeid,
					title: recipe.title
				})
				.then(response => res.status(201).send(response))
				.catch(error => res.status(400).send(error));
			})
	},

	list(req, res) {
		return Favorites.findAll({
			where: { userid: req.param.userid }
		})
		.then(response => res.status(201).send(response))
		.catch(error => res.status(400).send(error));
	}
}
