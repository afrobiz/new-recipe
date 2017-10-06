'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  })

  Recipe.associate = (models) => {
    Recipe.belongsTo(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE',
    });

    Recipe.hasMany(models.Review, {
      foreignKey: 'recipeid',
    });
  } 
  return Recipe;
};