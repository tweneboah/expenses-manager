import { combineReducers } from "redux";
import expensesReducer from "../reducers/expenses-reducers";
import filtersReducer from '../reducers/expensesFiltersReducer'

const rootReducer = combineReducers({
  expensesRoot: expensesReducer,
  filters: filtersReducer

});

export default rootReducer;
