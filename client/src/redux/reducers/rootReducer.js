import { combineReducers } from "redux";
import expensesReducer from "./expensesFiltersReducers";
import filterReducer from "./expensesFiltersReducers";

const rootReducer = combineReducers({
    expenses: expensesReducer,
    //filters: filterReducer
});

export default rootReducer;
