const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
    title: String,
    description: String,
    amount: Number,
    createdAt: String
});

module.exports = new mongoose.model("Expense", expensesSchema);
