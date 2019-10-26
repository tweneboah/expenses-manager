import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
//CUSTOM COMPONENTS
import Landing from './Components/Landing'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>


            <Route exact path="/" component={Landing} />


          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;