'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    upVotes: { 
          type: DataTypes.STRING,
          allowNull: false
          primaryKey: true;
      },
    downVote: {
        type: DataTypes.STRING,
        allowNull: false
        primaryKey: true;
      },
    reviews: {
        type: DataTypes.STRING,
        allowNull: false
        primaryKey: true;
      }, 
      Review.associate = (models) => {
        // associations can be defined here
      }
  );
  return Review;
};