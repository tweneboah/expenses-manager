This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## HOC EXPLAINED

```js
import React from "react";

//HOC
//A component(HOC) that renders another component
//resuable code
//manipulating props
//It's a normal function that returns a componet
//HOC component can render many components
// Resuse code
//hijacking rendering
//For example, creating a medical applications and you want to show privilages to user to show some information like

//Non HOC Component:
//You determined either to render this component or not based on the props passed in when calling it with the HOC

//You can use tenary expression to decide to display this component or not based on the propps passed in the hoc function

const Info = ({info, isAdmin, password, fullname}) => {
 
  return (
      <div>
      {isAdmin? (
        <div>
         <h3>Your details is: {info}</h3>
          <p>Full name: {fullname}</p>
          <p>Password: {password}</p>
        </div>
         
      ) : (
          <div>

          </div>
      )}
      </div>
    
  );
};

```
//This will render/call a component and it will inject many functions and props to the component it's rendering

//The argument passed in represent the component it's rendering

```js
const WithAdminWarning = WrappedComponent => {
  //Returning the component. Remember return a jsx which is the component

  //Pass in props. Remember the return value is the alternative version of Info component

  return props => (
     
    <div>
        
      {/* This is the message you want to send along 
        2. The paragraph text is the additional info added the Info component that makes is HOC
         */}
      <p>This is a private info. Please don't share</p>
      {/* Whatever you add here will automatically show */}
      {/* Returning the component */}
      <WrappedComponent  {...props} />
    </div>
  );
};

```

```js
//Rendering a componet
//The output of this results is the alternative version of component info
const AdminInfo = WithAdminWarning(Info);

const HOC = props => {
  return (
    <div>
      <AdminInfo isAdmin={true} info ='These are your details' fullname = 'Emmauel' password = '7w2wuqw298w7u2w'/>
    </div>
  );
};

export default HOC;

```

## Advance redux with filtering and sorting

```js
import React from "react";
import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//Reducer is a pure function. That means the output is determined by the input;

//We create a reducer for root of data for example in our case we have expenses array and filters object

//ACTIONS

//Actions make changes to redux store through reducers.
//Action holds the data to be added to redux store through reducers
//Actions can send data to reducers by allowing the user to pass in data to the reducer or by the action strictly sending from a server to the store

//NOTE:

const addExpenses = ({
  description,
  note = "Enter Note",
  amount = "Enter amount",
  createdAt = "20/2/2019",
  year
}) => {
  return {
    type: "ADD_EXPENSE",
    expenses: {
      id: uuid(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt,
      year
    }
  };
};

//SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    payload: text
  };
};

//SORT BY DATE

//This action won't accept any value but it will display a static value so we don't pass anything to it

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

//SORT BY AMOUNT

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

//START END DATE

//The argument passed to this action when dispatching it is not an object or array so we don't have to destructure it

const setStartDate = date => {
  return {
    type: "SET_START_DATE",
    payload: date
  };
};

//START END DATE

const setEndDate = date => {
  return {
    type: "SET_END_DATE",
    payload: date
  };
};

//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { sortBy, text, endDate, startDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Expenses Reducers

const expensesDefaultState = [];
const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];

    default:
      return state;
  }
};

//FILTERS REDUCER

const filtersDefaultState = {
  text: "",
  sortBy: "date", //date or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.payload
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.payload
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
};

//STORE

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpenses({
    description: "rent",
    amount: 300,
    createdAt: 1000,
    note: "Paid"
  })
);

store.dispatch(
  addExpenses({
    description: "rent",
    amount: 400,
    createdAt: 2000,
    note: "Paid 2"
  })
);

//store.dispatch(sortByDate());
//store.dispatch(sortByAmount());
store.dispatch(setEndDate(2000));
store.dispatch(setStartDate(150));
store.dispatch(setTextFilter("rent"));

//DESTRUCTURING

const Redux102 = props => {
  return (
    <div>
      <h1>Redux 102</h1>
    </div>
  );
};

export default Redux102;

```



## BASICS OF REDUX

```js
import React from 'react';
import {createStore} from 'redux'

const store = createStore((state ={count: 0, amount: 10}, action) => {
    switch(action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy: -10
        return {
            ...state,
            count: state.count + incrementBy,
            amount: state.amount + 20,
            
        }
        
        case 'DECREMENT':
            const decrementBy = action.decrementBy > 10 ? action.decrementBy: 20
            return {
                ...state,
                count: state.count  - decrementBy,
                amount: state.amount + 10
            }

            case 'RESET':
                return {
                    ...state,
                    count: 0,
                    amount: state.amount + 10
                }
        default:
            return state
    }
    
    
});

//This keep track of history to your store
 const unsubscribe =  store.subscribe(() => {
    console.log(store.getState())
 })

//Actions: This is an object send to the store

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 100
});



//decrement

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 1
});
unsubscribe()
store.dispatch({
    type: 'RESET'
})




console.log(store.getState())
const Redux101 = (props) => {
    return (
        
       <div>
<h1>Redux101</h1>
       </div>
    );
};

export default Redux101;
```