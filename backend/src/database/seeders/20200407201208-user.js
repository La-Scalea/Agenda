"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "user",
      [
        {
          user_st_name: "Usuario Hum da Silva",
          user_st_gender: "M",
          user_st_email: "testeemail@live.com",
          user_st_password: "123456",
          user_dt_birth: "1999-12-12",
          user_bl_state: true,
        },
        {
          user_st_name: "Usuario Dois da Silva",
          user_st_gender: "F",
          user_st_email: "testeemail@gmail.com",
          user_st_password: "987654",
          user_dt_birth: "1999-12-12",
          user_bl_state: true,
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("user", null, {}),
};
