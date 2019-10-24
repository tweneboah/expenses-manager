const express = require("express");
const expensesRoute = express.Router();
const Expense = require("../models/Expenses");

expensesRoute.post("/expenses", (req, res) => {
  const expense = new Expense(req.body);
  expense.save((err, expenseCreated) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      res.status(200).json({
        success: true,
        expense: expenseCreated
      });
    }
  });
});

//CREATE EXPENSES

module.exports = expensesRoute;
