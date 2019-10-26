// export default (expenses, filters) => {
//     return expenses.filter((expense) => {
//         return expense.description.toLowerCase().includes(filters.text.toLowerCase())
//     })
// }



export default (expenses, { text }) => {
    return expenses.filter((expense) => {

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    })
};
