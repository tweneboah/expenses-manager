const express = require("express");
const expensesRoute = express.Router();
const Expense = require("../models/Expenses");

expensesRoute.post("/api/expenses", (req, res) => {
  const expense = new Expense(req.body);
  expense.save((err, fromCreatexpenseRoute) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      res.status(200).json({
        success: true,
        fromCreatexpenseRoute
      });
    }
  });
});


expensesRoute.get('/api/expenses', (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) {
      console.log(err)
    } else {

      //If you return an object from .json() that property will be available in our app
      //res.status(200).json({expenses: expenses})
      res.status(200).json(expenses)
    }
  })


})


module.exports = expensesRoute;
