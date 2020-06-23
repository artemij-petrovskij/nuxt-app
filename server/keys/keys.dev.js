const mongodbpass = require('./password');
module.exports = {
  MONGO_URI: `mongodb+srv://user1:${mongodbpass.dbpass}@cluster0-nmc55.mongodb.net/NuxtDB`,
  JWT: 'dev-jwt-dev'
}
