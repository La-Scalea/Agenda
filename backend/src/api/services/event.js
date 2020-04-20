"use strict";

const eventRepository = require("../repositories/event");
const httpStatus = require("http-status-codes");
const Result = require("../classes/Result");

module.exports = {
  async readAllEvents(idUser) {
    let code, answer;
    try {
      answer = await eventRepository.readAllEvents(idUser);
      code = httpStatus.OK;
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async readEventById(resParams, idUser) {
    let code, answer;
    try {
      answer = await eventRepository.readEventById(resParams.id, idUser);
      if (answer) {
        code = httpStatus.OK;
      } else {
        answer = "Event not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async createEvent(resBody, idUser) {
    let code, answer;
    try {
      answer = await eventRepository.createEvent({ ...resBody }, idUser);
      code = httpStatus.OK;
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async updateEvent(resBody, resParams, idUser) {
    let code, answer;
    try {
      const event = await eventRepository.readEventById(resParams.id, idUser);
      if (event) {
        await eventRepository.updateEvent(resBody, resParams.id, idUser);
        code = httpStatus.OK;
      } else {
        answer = "Event not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async deleteEvent(resParams, idUser) {
    let code, answer;
    try {
      const event = await eventRepository.readEventById(resParams.id, idUser);
      if (event) {
        await eventRepository.deleteEvent(resParams.id, idUser);
        code = httpStatus.OK;
      } else {
        answer = "Event not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
};
