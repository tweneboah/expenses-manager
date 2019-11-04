import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import axios from 'axios'
//CUSTOM COMPONENTS
import Landing from './Components/Landing'
import Header from './Components/Header';
import UserRegistration from './Components/Forms/UserRegistration'
import CreateExpenses from './Components/CreateExpenses';
import Dashboard from './Components/Dashboard'
import EditExpenses from './Components/EditExpense';
import Login from './Components/Forms/Login'



class App extends Component {


  render() {
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

              <Route exact path="/register" component={UserRegistration} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;