import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addExpense } from "./actions/expenses-actions";
import { setTextFilter } from '../redux/actions/expensesFiltersAction'
import thunk from 'redux-thunk'
//STORE
import getVisibleExpenses from '../utils/getVisibleExpenses'
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// store.dispatch(setTextFilter('Rent'))



// const state = store.getState();
// //console.log(state)

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// //console.log(visibleExpenses);
export default store;
