'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    upVotes: { 
          type: DataTypes.STRING,
          allowNull: false,
      },
      recipeid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    downVote: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    reviews: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
      Review.associate = (models) => {
        Review.belongsTo(models.Review, {
        foreignKey: 'recipeid',
    });
        // associations can be defined here
      }
  return Review;
};      