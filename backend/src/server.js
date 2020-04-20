require("dotenv").config();
const server = require("./api/app");

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
