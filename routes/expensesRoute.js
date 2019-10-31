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
});



//SHOW A SINGLE EXPENSE

expensesRoute.get('/api/expense/:id', (req, res) => {
    Expense.findById(req.params.id, (err, foundedExpenses) => {
        if (err) {
            return res.json({
                success: false,
                err
            })
        } else {
            return res.json(foundedExpenses)
        }
    });
});


expensesRoute.post('/api/expense/update/:id', (req, res) => {
    Expense.findById(req.params.id, (err, foundedExpenses) => {
        if (!foundedExpenses) {
            res.json('No Expenses found')
        } else {
            //Pull out the data of this expense from req
            foundedExpenses.title = req.body.title;
            foundedExpenses.decription = req.body.description;
            foundedExpenses.amount = req.body.amount;
            foundedExpenses.createdAt = req.body.createdAt

            //Save
            foundedExpenses.save((err, data) => {
                if (err) {
                    return res.json(err)
                } else {

                }
            })
        }
    })
})




module.exports = expensesRoute;
