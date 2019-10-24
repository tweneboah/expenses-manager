export default expenses => {
  return expenses
    .map(expense => {
      return expense.amount;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
};
