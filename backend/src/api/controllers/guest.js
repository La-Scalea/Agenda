const guestService = require("../services/guest");

module.exports = {
  async guestReadAllInEvent(req, res) {
    const result = await guestService.readAllGuestsInEvent(req.params);
    return res.status(result.code).send(result.return);
  },
  async guestCreateInEvent(req, res) {
    const result = await guestService.createGuestInEvent(req.body, req.params);
    return res.status(result.code).send(result.return);
  },
  async guestUpdateInEvent(req, res) {
    const result = await guestService.updateGuestInEvent(req.body, req.params);
    return res.status(result.code).send(result.return);
  },
  async guestDeleteInEvent(req, res) {
    const result = await guestService.deleteGuestInEvent(req.params);
    return res.status(result.code).send(result.return);
  },
};
