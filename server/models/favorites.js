'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorites', {
   recipeId:  {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
    recipeContent: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
  });
      Favorite.associate = (models) => {
        Favorites.belongsTo(models.User, {
        foreignKey: 'UserName'
     }); 
        // associations can be defined here
      }
  return Favorites;
};
