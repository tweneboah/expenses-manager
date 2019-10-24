const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  description: String,
  notes: String,
  amount: Number,
  createdAt: String
});

module.exports = new mongoose.model("Expense", expensesSchema);
