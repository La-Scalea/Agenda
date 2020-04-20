"use strict";
const Model = require("../models");

module.exports = {
  async findByEmail(loginEmail) {
    return await Model.user.findOne({
      where: { user_st_email: loginEmail },
    });
  },
  async readAllUsers() {
    const user = await Model.user.findAll({
      attributes: { exclude: ["user_st_password", "user_bl_state"] },
    });
    return user;
  },
  async readUserById(idUser) {
    const user = await Model.user.findOne({
      where: { user_uu_identity: idUser },
      attributes: { exclude: ["user_st_password", "user_bl_state"] },
    });
    return user;
  },
  async createUser(bodyUser) {
    const data = await Model.user.create({ ...bodyUser });
    return data;
  },
  async updateUser(bodyUser, idUser) {
    return await Model.user.update(
      { ...bodyUser },
      { where: { user_uu_identity: idUser } }
    );
  },
  async deleteUser(idUser) {
    return await Model.user.destroy({
      where: { user_uu_identity: idUser },
    });
  },
};
