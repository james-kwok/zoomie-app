const express = require('express');
const app = express();
const locationsRouter = require('./routes/locations_route');
const dogsRouter = require('./routes/dogs_route');

app.use('/locations', locationsRouter);
app.use('/dogs', dogsRouter);

const PORT = process.env.PORT;
app.listen(PORT, (_req, _res) => {
  console.log('Server is live');
});
