require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3002,
  mongoURI: process.env.MONGODB_URI,
};
