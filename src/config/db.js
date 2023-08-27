const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'D:/M3-QR/src/.env'})

process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

const DB_URI = process.env.DATABASE;
console.log("db string",DB_URI);

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
