export default (expenses) => {
    return expenses.map((expense) => {
        return expense.amount
    }).reduce((acc, val) => {
        return acc + val
    }, 0)
}

