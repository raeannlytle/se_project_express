const express = require("express");
const app = express();

const { PORT = 3001 } = process.env;
app.listen(PORT, () => {
  console.log("App is listening at PORT 3001");
});
