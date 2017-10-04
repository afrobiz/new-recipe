module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNo {
        type: DataTypes.INTEGER,
        allowNull: false
      });

    
    User.associate = (models) => {
     User.hasMany(models.Recipe, {
     foreignKey: 'recipe',
     as: 'recipeContents',
     }); 

     User.hasMany(models.Favorite, {
     foreignKey: 'recipeId',
     as: 'recipeContents',
     }); 
     // associations can be defined here
     User.hasMany(models.Favorite, {
     foreignKey: 'recipeId',
     as: 'recipeContents',
     });  
    };
    return User;

};