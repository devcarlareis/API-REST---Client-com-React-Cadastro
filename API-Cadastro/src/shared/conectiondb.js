const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  await mongoose.connect(process.env.URLDB).then(
      () => {
          console.info(`Connected to database`)
      },
      error => {
          console.error(`Connection error: ${error}`)
      }
  )
}

connectDb().catch(error => console.error(error))
module.exports = connectDb