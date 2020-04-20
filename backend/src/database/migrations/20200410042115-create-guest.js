"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("guest", {
      gues_in_identity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      even_in_identity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "event",
          key: "even_in_identity",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      gues_st_email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      gues_bl_confirmation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("guest");
  },
};
