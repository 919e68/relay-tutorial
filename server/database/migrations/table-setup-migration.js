'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    // 1
    queryInterface.createTable(
      'Users', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        lastName: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        username: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }
    )

    // 2
    // 1
    queryInterface.createTable(
      'Todos', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        text: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }
    )
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('Users')
    queryInterface.dropTable('Todos')
  }
};
