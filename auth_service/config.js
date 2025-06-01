require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGODB_URI,
};
