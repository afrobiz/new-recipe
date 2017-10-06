
### Welcome to MORE-RECIPES

MORE-RECIPES allows users to create, edit, retrieve and delete recipes. It allows you to search for a particular recipes by its id.
Pictures of recipes are added to allow for easy navigation to recipes.
And what else? It is free!
[Click here](http://.herokuapp.com/) to view the app on Heroku.

### Core Tecnologies
-----------
The application was developed with [NodeJs](https://nodejs.org/en/docs/) while using [Express](http://expressjs.com) for routing.
The [Postgres](http://postgresql.com) database was used with [sequelize](http://sequelizejs.com) as the ORM.
The user interface was built using [Html and Bootstrap.css] with [Babel](http://babeljs.io) was used to transpile all code to es5

### Installation
------------
1.  Ensure you have NodeJs and postgres installed
2.  Clone the repository `git clone https://github.com/afrobiz/new-recipe.git`
3.  Change your directory `cd new-recipe`
4.  Install all dependencies `npm install`
5.  Run tests  `npm test`
6.  Run `npm run db:migrate` and then `sequelize db:seed:all` to populate your database with initial roles and user data.
7.  Start the app `npm run dev`.

### API ENDPOINTS
Access for the endpoints are restricted based on the Authorization token assigned to the user.
Users are assigned a JWT on creating an account and login to the system, this token is therefore used to authorise access to the API endpoints.

For more info on using the api, click [here](http://more-recipe.herokuapp.com/)

### Limitations
Users cannot upload a recipe twice, and can only make make upvote to a recipe that is a user cannot upvote and downvote simultaneously. A user can only add a recipe to his favorite table once. 

### Contributing
Contributions are most welcome. To contribute: 
1. open an issue in the issues tab on github
2. fork the repository
3. work on the feature
4. raise a PR to the staging branch.

### Licence
MIT
