

//Get visible expenses
export default (expenses, { text }) => {
    return expenses.filter(expense => {
        const textMatch = expense.title.toLowerCase().includes(text.toLowerCase())
        return textMatch
    })

};
