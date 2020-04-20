"use strict";
const Model = require("../models");

module.exports = {
  async readAllEvents(idUser) {
    return await Model.event.findAll({ where: { user_uu_identity: idUser } });
  },
  async readEventById(idEvent, idUser) {
    const data = await Model.event.findOne({
      where: {
        even_in_identity: idEvent,
        user_uu_identity: idUser,
      },
    });
    return data;
  },
  async createEvent(bodyEvent, idEvent) {
    const data = await Model.event.create({
      ...bodyEvent,
      user_uu_identity: idEvent,
    });
    return data;
  },
  async updateEvent(bodyEvent, idEvent, idUser) {
    return await Model.event.update(
      { ...bodyEvent },
      { where: { user_uu_identity: idUser, even_in_identity: idEvent } }
    );
  },
  async deleteEvent(idEvent, idUser) {
    return await Model.event.destroy({
      where: { user_uu_identity: idUser, even_in_identity: idEvent },
    });
  },
};
