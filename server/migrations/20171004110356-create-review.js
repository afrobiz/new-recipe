'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      upVotes: {
        type: Sequelize.INTEGER,
      },
      downVote: {
        type: Sequelize.INTEGER,
      },
      reviews: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recipeid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Recipes',
          key: 'id',
          as: 'recipeid',
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable('Reviews');
  }
};