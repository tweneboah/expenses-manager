import { combineReducers } from "redux";
import expensesReducer from "./expenses-reducers";
import filterReducer from "./filters-reducers";

const rootReducer = combineReducers({
  expensesRootReducer: expensesReducer,
  filterReducer: filterReducer

});

export default rootReducer;
