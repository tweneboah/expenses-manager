require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Routes
const expensesRoute = require("./routes/expensesRoute");

//DB CONNECTION

if (app.get('env') === 'development') {
  mongoose
    .connect(process.env.MONGODB_LOCAL_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected successfully"));

} else {
  mongoose
    .connect(process.env.MONGODB_LIVE_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected successfully"));

}
//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true })); //Help to pass data through form
app.use(bodyParser.json()); //Display json format


//USING ROUTES
app.use("/", expensesRoute);

//SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`The server is runing on port ${PORT}`);
});
