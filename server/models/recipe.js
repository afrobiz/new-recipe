'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipeId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipeContent: {
        type: DataTypes.STRING,
        allowNull: false,
    };

      Recipe.associate = (models) => {
        Recipe.hasMany(models.Favorite, {
        foreignKey: 'recipeId',
        as: 'recipeContents',
     });
        Recipe.belongsTo(models.User, {
        foreignKey: 'userName',
     });

    };
      // associations can be
        // associations can be defined here
    });
  return Recipe;
};