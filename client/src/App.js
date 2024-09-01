const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const database = require('./database');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/spacecraft', require('./routes/spacecraftRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Database connection
database.connect();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});