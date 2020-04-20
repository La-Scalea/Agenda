"use strict";
const Model = require("../models");

module.exports = {
  async readAllGuestInEvent(idEvent) {
    return await Model.guest.findAll({
      where: { even_in_identity: idEvent },
    });

  },
  async readGuest(idGuest, idEvent) {
    const data = await Model.guest.findOne({
      where: { gues_in_identity: idGuest, even_in_identity: idEvent },
    });
    if (data) {
      return true;
    } else {
      return false;
    }
  },
  async checkEmailInEvent(emailGuest, idEvent) {
    const data = await Model.guest.findOne({
      where: { gues_st_email: emailGuest, even_in_identity: idEvent },
    });
    if (data) {
      return true;
    } else {
      return false;
    }
  },
  async createGuest(bodyGuest, idEvent) {
    const data = await Model.guest.create({
      ...bodyGuest,
      even_in_identity: idEvent,
    });
    return data;
  },
  async updateGuest(bodyGuest, idGuest, idEvent) {
    return await Model.guest.update(
      { ...bodyGuest },
      { where: { gues_in_identity: idGuest, even_in_identity: idEvent } }
    );
  },
  async deleteGuest(idGuest, idEvent) {
    return await Model.guest.destroy({
      where: { gues_in_identity: idGuest, even_in_identity: idEvent },
    });
  },
};
