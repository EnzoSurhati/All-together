require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const api = require("./api/index");
const jwt = require("jsonwebtoken");

app.use(express.json());


app.use("/api", api);



app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
