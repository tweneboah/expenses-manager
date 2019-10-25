import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addExpense } from "./actions/expenses-actions";
import thunk from 'redux-thunk'
//STORE

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
