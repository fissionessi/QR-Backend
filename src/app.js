const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

const dotenv = require('dotenv');
dotenv.config({path:'./.env'})

const app = express();

app.use(bodyParser.json());

app.use('/categories', categoryRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});