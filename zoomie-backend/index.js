const express = require('express');
const app = express();
const cors = require('cors');
const locationsRouter = require('./routes/locations_route');
const dogsRouter = require('./routes/dogs_route');
const usersRouter = require('./routes/users_route');
const checkinsRouter = require('./routes/checkins_route');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/locations', locationsRouter);
app.use('/dogs', dogsRouter);
app.use('/users', usersRouter);
app.use('/checkins', checkinsRouter);

const PORT = process.env.PORT;
app.listen(PORT, (_req, _res) => {
  console.log('Server is live');
});
