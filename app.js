require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//Models
const User = require('./models/User');
const bodyParser = require("body-parser");
const path = require('path')
const passport = require('passport');
const LocalStrategy = require('passport-local')
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

//PASSPORT-CONFIGURATION
app.use(require('express-session')({
  secret: 'Am on the way',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//SERVING REACT FILES
app.use(express.static(path.join(__dirname, 'client/build')));

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true })); //Help to pass data through form
app.use(bodyParser.json()); //Display json format


//USING ROUTES
app.use("/", expensesRoute);



// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`The server is runing on port ${PORT}`);
});
