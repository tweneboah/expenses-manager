import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";

//Components
import ExpensesDashboard from "./Components/ExpensesDashboard";
import CreateExpenses from "./Components/CreateExpenses";
import EditExpenses from "./Components/EditExpenses";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import PracticeRedux from './playground/practiceRedux'



function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
      <PracticeRedux/>
          <Switch>
            <Route exact path="/dashboard" component={ExpensesDashboard} />

            <Route exact path="/create" component={CreateExpenses} />

            <Route exact path="/notes" component={Notes} />

            <Route exact path="/edit/:id" component={EditExpenses} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
