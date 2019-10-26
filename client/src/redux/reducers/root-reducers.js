import { combineReducers } from "redux";
import expensesReducer from "./expenses-reducers";


const rootReducer = combineReducers({
  expenses: expensesReducer,


});

export default rootReducer;
