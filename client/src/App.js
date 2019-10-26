import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
//CUSTOM COMPONENTS
import Landing from './Components/Landing'
import Header from './Components/Header'
import ExpensesList from './Components/ExpensesList'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/list" component={ExpensesList} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;