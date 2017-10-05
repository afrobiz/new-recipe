module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('Users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNo: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
     
   },
  down: (queryInterface, Sequelize ) => {
    return queryInterface.dropTable('Users')
  }
}
