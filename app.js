console.log("Expensify App");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome HiCotek Home");
});

//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is runing on port ${PORT}`);
});
