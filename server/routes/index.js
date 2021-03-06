const users = require ('../controllers').users;
const recipes = require ('../controllers').recipes;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipesss API!',
  }))

  app.post('/api/users/signup', users.create);
  app.post('/api/users/signin', users.login);
  app.get('/api/users/all', users.list);
  app.post('/api/recipes', recipes.create);
  app.get('/api/recipes/all', recipes.list);
  app.put('/api/recipes/:id', recipes.update);
  app.delete('/api/recipes/:id', recipes.destroy);
};
  


//   app.get('/api/recipes', (req, res) => {
//   	if (req.query.sort === 'upvotes') {
//   		let best;
// 			Object.keys(recipes).forEach((key) => {
// 				let recipe = recipes[key]
// 				if (!best) {
// 					best = recipe
// 				}
// 				else if (recipe.upvotes > best.upvotes) {
// 					best = recipe
// 				}
// 			})
// 			return res.status(200).send({message: best})
//   	}
//   	res.status(200).send({
//     	message: recipes
//   	});
// 	})

// 	app.post('/api/recipes', (req, res) => {
// 		const recipeId = req.body.recipeId;
// 		const title = req.body.title;
// 		const recipeContent = req.body.recipeContent;
// 		console.log(!isNaN(recipe))
// 		if( !recipe || typeof recipe == 'number')
// 		{ return "invalid input" }
// 		else {
// 		recipes[recipe] = { data: content, upvotes: 0}
//   	res.status(200).send({
//     	message: ['recipe added successfully', recipes] 
//   	})};
// 	})

// 	app.put('/api/recipes/:recipeId', (req, res) => {
// 		const recipeToGet = req.params.recipeId
// 		const valueToUpdate = req.body.valueToUpdate
// 		recipes[recipeToGet].data = valueToUpdate
//   	res.status(200).send({
//     	message: ['recipe updated successfully', recipes]
//   	});
// 	})
// 	app.delete('/api/recipes/:recipeId', (req, res) => {
// 		delete recipes[req.params.recipeId]
// 		res.status(200).send({message:'recipe deleted successfully'})
// 	})
// }

























