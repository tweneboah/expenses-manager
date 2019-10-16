import React from 'react';


const ExpensesListItem = ({expense}) => {
   
    return (
        
       <div>
          <h3>{expense.description }</h3>
          <p>Amount: {expense.amount}</p>
          <p>Created At: {expense.createdAt}</p>
       </div>
    );
};

export default ExpensesListItem;