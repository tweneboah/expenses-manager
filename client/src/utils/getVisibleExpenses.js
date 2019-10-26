

//Get visible expenses
export default (expenses, { text }) => {
    return expenses.filter(expense => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return textMatch
    })

};
