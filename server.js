const express = require('express');
const app = express();
const PORT = 3000;
const api = require("./api/index");

app.use(express.json());
app.use("/api", api);



app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
