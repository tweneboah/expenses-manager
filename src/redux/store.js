import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addExpense, } from "./actions/expenses-actions";

//STORE

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));


store.dispatch(
  addExpense({
    description: "rent",
    amount: 300,
    createdAt: 1000,
    note: "Paid"
  })
);

store.dispatch(
  addExpense({
    description: "How to kill node Js",
    amount: 400,
    createdAt: 2000,
    note: "Paid 2"
  })
);


store.dispatch(
  addExpense({
    description: "React js const",
    amount: 900,
    createdAt: 50000000,
    note: "It's really expensive"
  })
);


store.dispatch(
  addExpense({
    description: "How to kill node Js",
    amount: 400,
    createdAt: 2000,
    note: "Paid 2"
  })
);



export default store;
