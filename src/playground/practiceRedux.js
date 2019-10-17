import React from 'react';

const PracticeRedux = (props) => {
    const expenses = [
        {id: 1, description: 'buying react js', amount: 3000},
        {id: 2, description: 'buying node js', amount: 2000},
        {id: 3, description: 'buying express js', amount: 4000},
        {id: 4, description: 'buying redux js', amount: 5000, text: ''}
    ];


    const filters = {
        text: 'rent'
    }

    //Display all data that amount is greater than 3000

    const filterAmount = (expense, filter) => {
        const money = expenses.filter((expense) => {
            const yes = expense.amount > 3000
            const yes2 = filters.text === 'rent'
           return yes && yes2
        });

        console.log(money)
    }

    filterAmount()
  


    return (
       
        <div>
            <h1>Filter </h1>
        </div>
        
    );
};

export default PracticeRedux;