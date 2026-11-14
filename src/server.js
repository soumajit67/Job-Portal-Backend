const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);


require("dotenv").config();
const app = require("./app.js");
const connectDB = require("./config/db.js");

if (require.main === module) {
  connectDB().then(() => {
    const PORT = process.env.PORT || 7000;
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
  });
}

module.exports = app;
