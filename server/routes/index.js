const recipes = {
	rice: {
		data: ['pepper', 'maggi', 'tomato'],
		upvotes: 14
	}, 
	beans: {
		data: ['beans', 'nek', 'sss'],
		upvotes: 16
		},
	noodles: {
		data: ['indo', 'mie', 'ciois'],
		upvotes: 8
	},
	chicken: {
		data: ['water', 'curry'],
		upvotes: 10
	}
}

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipesss API!',
  }));
  

  app.get('/api/recipes', (req, res) => {
  	if (req.query.sort === 'upvotes') {
  		let best;
			Object.keys(recipes).forEach((key) => {
				let recipe = recipes[key]
				if (!best) {
					best = recipe
				}
				else if (recipe.upvotes > best.upvotes) {
					best = recipe
				}
			})
			return res.status(200).send({message: best})
  	}
  	res.status(200).send({
    	message: recipes
  	});
	})

	app.post('/api/recipes', (req, res) => {
		const recipe = req.body.recipe;
		const content = req.body.content;
		recipes[recipe] = { data: content, upvotes: 0}
  	res.status(200).send({
    	message: ['recipe added successfully', recipes]
  	});
	})

	app.put('/api/recipes/:recipeId', (req, res) => {
		const recipeToGet = req.params.recipeId
		const valueToUpdate = req.body.valueToUpdate
		recipes[recipeToGet].data = valueToUpdate
  	res.status(200).send({
    	message: ['recipe updated successfully', recipes]
  	});
	})
	app.delete('/api/recipes/:recipeId', (req, res) => {
		delete recipes[req.params.recipeId]
		res.status(200).send({message:'recipe deleted successfully'})
	})
}

























