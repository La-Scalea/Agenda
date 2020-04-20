const eventService = require("../services/event");
const authenticateService = require("../services/authenticate");

module.exports = {
  async eventReadAllByUser(req, res) {
    const data = await authenticateService.extractDataByAutorizationHeader(
      req.headers.authorization
    );
    const result = await eventService.readAllEvents(data.id);
    return res.status(result.code).send(result.return);
  },
  async eventReadById(req, res) {
    const data = await authenticateService.extractDataByAutorizationHeader(
      req.headers.authorization
    );
    const result = await eventService.readEventById(req.params, data.id);
    return res.status(result.code).send(result.return);
  },
  async eventCreate(req, res) {
    const data = await authenticateService.extractDataByAutorizationHeader(
      req.headers.authorization
    );
    const result = await eventService.createEvent(req.body, data.id);
    return res.status(result.code).send(result.return);
  },
  async eventUpdate(req, res) {
    const data = await authenticateService.extractDataByAutorizationHeader(
      req.headers.authorization
    );
    const result = await eventService.updateEvent(
      req.body,
      req.params,
      data.id
    );
    return res.status(result.code).send(result.return);
  },
  async eventDelete(req, res) {
    const data = await authenticateService.extractDataByAutorizationHeader(
      req.headers.authorization
    );
    const result = await eventService.deleteEvent(req.params, data.id);
    return res.status(result.code).send(result.return);
  },
};
