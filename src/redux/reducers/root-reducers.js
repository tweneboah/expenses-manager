import { combineReducers } from "redux";
import expensesReducer from "./expenses-reducers";
import filterReducer from "./filters-reducers";

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
});

export default rootReducer;
