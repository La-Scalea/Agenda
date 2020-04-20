"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("event", {
      even_in_identity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      even_st_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      even_st_description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null,
      },
      even_dt_beginning: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      even_dt_end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_uu_identity: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "user_uu_identity",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("event");
  },
};
