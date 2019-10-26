import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";

//Components
import CreateExpense from './Components/CreateExpenses'
import ExpensesList from './Components/ExpensesList'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>

            <Switch>
              <Route exact path="/" component={CreateExpense} />
              <Route exact path="/list" component={ExpensesList} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

