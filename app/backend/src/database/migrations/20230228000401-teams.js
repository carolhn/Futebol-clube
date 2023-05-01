'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('teams', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      teamName: {
        field: 'team_name',
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teams');
  }
};
