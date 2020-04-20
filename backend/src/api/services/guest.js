"use strict";
const guestRepository = require("../repositories/guest");
const httpStatus = require("http-status-codes");
const Result = require("../classes/Result");

module.exports = {
  async readAllGuestsInEvent(resParams) {
    let code, answer;
    try {
      answer = await guestRepository.readAllGuestInEvent(resParams.idEvent);
      code = httpStatus.OK;
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async createGuestInEvent(resBody, resParams) {
    let code, answer;
    try {
      const email = await guestRepository.checkEmailInEvent(
        resBody.gues_st_email,
        resParams.idEvent
      );
      if (!email) {
        answer = await guestRepository.createGuest(
          { ...resBody },
          resParams.idEvent
        );
        code = httpStatus.OK;
      } else {
        answer = "E-mail already registered";
        code = httpStatus.BAD_REQUEST;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async updateGuestInEvent(resBody, resParams) {
    let code, answer;
    try {
      const guest = await guestRepository.readGuest(
        resParams.idGuest,
        resParams.idEvent
      );
      if (guest) {
        const email = await guestRepository.checkEmailInEvent(
          resBody.gues_st_email,
          resParams.idEvent
        );
        if (email) {
          code = httpStatus.BAD_REQUEST;
          answer = "This email has already been invited";
        } else {
          await guestRepository.updateGuest(
            { ...resBody },
            resParams.idGuest,
            resParams.idEvent
          );
          code = httpStatus.OK;
        }
      } else {
        answer = "Guest not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
  async deleteGuestInEvent(resParams) {
    let code, answer;
    try {
      const guest = await guestRepository.readGuest(
        resParams.idGuest,
        resParams.idEvent
      );
      if (guest) {
        await guestRepository.deleteGuest(resParams.idGuest, resParams.idEvent);
        code = httpStatus.OK;
      } else {
        answer = "Guest not found";
        code = httpStatus.NOT_FOUND;
      }
    } catch (error) {
      answer = error.message;
    }
    let result = new Result(code, answer);
    return result.resultForResponse();
  },
};
