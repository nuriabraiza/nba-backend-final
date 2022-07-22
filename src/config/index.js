const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname + "/" + process.argv[2] + ".env"),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE: process.argv[4] || process.env.DATABASE,
  PORT: process.argv[3] || process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  TOKEN: process.env.TOKEN,
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_TO: process.env.MAIL_TO,
  MAIL_PASS: process.env.MAIL_PASS,
};
