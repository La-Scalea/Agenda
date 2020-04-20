"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "guest",
      [
        {
          gues_st_email: "a_test@uol.com",
          gues_bl_confirmation: false,
          even_in_identity: 1,
        },
        {
          gues_st_email: "b_test@gmail.com",
          gues_bl_confirmation: false,
          even_in_identity: 1,
        },
        {
          gues_st_email: "c_test@yahoo.com",
          gues_bl_confirmation: true,
          even_in_identity: 1,
        },
        {
          gues_st_email: "d_test@aol.com",
          gues_bl_confirmation: true,
          even_in_identity: 1,
        },{
          gues_st_email: "a_test@uol.com",
          gues_bl_confirmation: false,
          even_in_identity: 2,
        },
        {
          gues_st_email: "b_test@gmail.com",
          gues_bl_confirmation: false,
          even_in_identity: 2,
        },
        {
          gues_st_email: "c_test@yahoo.com",
          gues_bl_confirmation: true,
          even_in_identity: 2,
        },
        {
          gues_st_email: "d_test@aol.com",
          gues_bl_confirmation: true,
          even_in_identity: 2,
        },
        {
          gues_st_email: "a_test@uol.com",
          gues_bl_confirmation: false,
          even_in_identity: 3,
        },
        {
          gues_st_email: "b_test@gmail.com",
          gues_bl_confirmation: false,
          even_in_identity: 3,
        },
        {
          gues_st_email: "c_test@yahoo.com",
          gues_bl_confirmation: true,
          even_in_identity: 3,
        },
        {
          gues_st_email: "d_test@aol.com",
          gues_bl_confirmation: true,
          even_in_identity: 3,
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("guest", null, {}),
};
