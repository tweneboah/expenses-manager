import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ExpensesDashboard from './Components/ExpensesDashboard';
import Header from './Components/Header'

function App() {
  
  return (
    <div className="App">
      
     <BrowserRouter>
     <Header/>
      <Switch>
        <Route exact path ='/dashboard' component = {ExpensesDashboard}/>
      </Switch>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
