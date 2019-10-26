import { combineReducers } from "redux";
import expensesRootReducer from "./expensesReducers";
import filterReducer from "./expensesFiltersReducers";

const rootReducer = combineReducers({
    expensesRootReducer,
    filters: filterReducer
});

export default rootReducer;
