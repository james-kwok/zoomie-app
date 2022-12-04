const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, (_req, _res) => {
  console.log("Server is live");
});