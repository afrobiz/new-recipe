const Recipe = require('../models').Recipe;
module.exports = {
	create(req, res) {
		return Recipe.create({
				title: req.body.title,
				content: req.body.content,
        userid: req.body.userid,
			})
			.then(response => res.status(201).send(response))
			.catch(error => res.status(400).send(error));
	},


  list(req, res) {
  return Recipe
    .all({attributes: ['id', 'content', 'title']})
    .then(recipes => res.status(200).send(recipes))
    .catch(error => res.status(400).send(error));
  },


	update(req, res) {
  return Recipe
    .findById(req.params.id, {
      attributes: ['id','content','title']
    })
    .then(recipe => {
      if (!recipe) {
        return res.status(404).send({
          message: 'Recipe Not Found',
        });
      }
      return recipe
        .update({
          title: req.body.title || recipe.title,
          content: req.body.content || recipe.content,
        })
        .then(() => res.status(200).send({ message: ['Recipe updated successfully', recipe]}))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
 
destroy(req, res) {
  return Recipe
    .findById(req.params.id, {
      attributes: ['id','content','title']
    })
    .then(Recipe => {
      if (!Recipe) {
        return res.status(400).send({
          message: 'Recipe Not Found',
        });
      }
      return Recipe
        .destroy()
        .then(() => res.status(204).send({ message: 'Recipe deleted successfully'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
   
}

