import {createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducers'
import { composeWithDevTools} from 'redux-devtools-extension';
import { addExpense,} from './actions/expenses-actions';
import {setTextFilter } from './actions/filters-actions'
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
      description: "rent",
      amount: 400,
      createdAt: 2000,
      note: "Paid 2"
    })
  );

  store.dispatch(setTextFilter('bill'))
export default store
  
