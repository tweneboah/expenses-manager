import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addExpense } from "./actions/expenses-actions";

//STORE

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

store.dispatch(
  addExpense({
    description: "rent",
    amount: 100,
    createdAt: 1000,
    note: "Paid"
  })
);

store.dispatch(
  addExpense({
    description: "How to kill node Js",
    amount: 200,
    createdAt: 200078999,
    note: "Paid 2"
  })
);

store.dispatch(
  addExpense({
    description: "React js const",
    amount: 3000,
    createdAt: 50000000000,
    note: "It's really expensive"
  })
);

store.dispatch(
  addExpense({
    description: "How to kill node Js",
    amount: 4000,
    createdAt: 800000,
    note: "Paid 2"
  })
);

export default store;
