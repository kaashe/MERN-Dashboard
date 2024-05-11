const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI;

async function dbConnect() {
    try {
      await mongoose.connect(URI);
      console.log('Connected to MongoDB Atlas: 200');
    } catch (error) {
      console.log('Connection failed to MongoDB Atlas: X');
      console.log(error, "error");
    }
  }
module.exports = dbConnect;
