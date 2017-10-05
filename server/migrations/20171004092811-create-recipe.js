'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userid: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
            as: 'userid',
          },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('Recipes')
    }
  }