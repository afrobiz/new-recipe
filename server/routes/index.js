const users = require ('../controllers').users;
const recipes = require ('../controllers').recipes;
const favorites = require ('../controllers').favorites;

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
  app.post('/api/users/:userid/recipes', favorites.create);
  app.get('/api/users/:userid/recipes', favorites.list);
};
