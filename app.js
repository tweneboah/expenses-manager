const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//Routes
const expensesRoute = require("./routes/expensesRoute");

//DB CONNECTION
mongoose
  .connect("mongodb://localhost/expensify", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected successfully"));

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true })); //Help to pass data through form
app.use(bodyParser.json()); //Display json format
app.use(cors());

//USING ROUTES
app.use("/", expensesRoute);
app.get("/", (req, res) => {
  res.send("Welcome HiCotek Home");
});

//SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`The server is runing on port ${PORT}`);
});
