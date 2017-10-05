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
        Favorites.belongsTo(models.Recipe, {
        foreignKey: 'userid',
        onDelete: 'CASCADE',
     }); 
        // associations can be defined here
      }
  return Favorites;
};
