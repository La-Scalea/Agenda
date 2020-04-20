"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      user_uu_identity: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        unique:true,
      },
      user_st_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_st_gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_st_email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_st_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_dt_birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_bl_state: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user");
  },
};
