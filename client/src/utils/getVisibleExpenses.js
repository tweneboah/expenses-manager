import moment from 'moment'

//Get visible expenses
export default (expenses, { text, startDate, endDate }) => {
    return expenses.filter(expense => {
        const textMatch = expense.title.toLowerCase().includes(text.toLowerCase())

        //FILTER BY DATE. 
        //In this case we will use the date the expense was created as a starting point to compare when a user is selecting a date on the calendar
        // const dateTheExpenseWasCreated = moment(expenses.createdAt) //Starting point

        // const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(dateTheExpenseWasCreated, "day")
        //     : true;

        // const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(dateTheExpenseWasCreated, "day")
        //     : true;


        //Since the original date format for the expense createdAt is an integer we have to convert what we are passing to moment as a integer so that we can compare
        const createdAtMoment = moment(parseInt(expense.createdAt));

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day")
            : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day")
            : true;


        return textMatch && startDateMatch && endDateMatch
    })

};


