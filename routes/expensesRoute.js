const express = require("express");
const expensesRoute = express.Router();
const Expense = require('../models/Expense');

//CREATE EXPENSES

expensesRoute.post("/api/expenses", (req, res) => {
    const exp = new Expense(req.body);
    exp.save((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(docs);
        }
    });
});

//GET ALL EXPENSES
expensesRoute.get("/api/expenses", (req, res) => {
    Expense.find((err, expenses) => {
        if (err) {
            return res.json({
                success: fale,
                err: err
            });
        } else {
            return res.status(200).json(expenses);
        }
    });
});


//DELETE EXPENSES ROUTE

expensesRoute.delete('/api/expenses/:id', (req, res) => {
    Expense.findByIdAndRemove(req.params.id, (err, deletedExpense) => {
        if (err) {
            return res.json({ err })
        } else {
            return res.json('Item deleted Successfully')
        }
    })
})
module.exports = expensesRoute;
