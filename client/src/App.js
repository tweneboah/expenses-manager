import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./App.css";
//CUSTOM COMPONENTS
import Landing from './Components/Landing'
import Header from './Components/Header'
import ExpensesList from './Components/ExpensesList/ExpensesList'
import CreateExpenses from './Components/CreateExpenses';
import Dashboard from './Components/Dashboard'
import EditExpenses from './Components/EditExpense';
import { fetchExpenses } from '././redux/actions/expensesActions'
function App() {

  return (
    <Provider store={store}>
      <div className="App">

        {/* forceRefresh={true} will cause refresh */}
        <BrowserRouter forceRefresh={true}>

          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path='/expense/:id' component={EditExpenses} />
            <Route exact path="/create" component={CreateExpenses} />

            <Route exact path="/dashboard" component={Dashboard} />


          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;