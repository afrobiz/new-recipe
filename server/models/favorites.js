'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
   userid:  {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    recipeid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
  });
  Favorites.associate = (models) => {
    Favorites.hasMany(models.Recipe, {
      foreignKey: 'recipeid',
      onDelete: 'CASCADE',
    });
    
    Favorites.hasMany(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
  }
  return Favorites;
};
