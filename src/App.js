import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ExpensesDashboard from './Components/ExpensesDashboard';
import CreateExpenses from './Components/CreateExpenses';
import EditExpenses from './Components/EditExpenses';
import Header from './Components/Header';
import Notes from './Components/Notes'
import Redux101 from './playground/redux102'

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Header/>
     <Redux101/>
      <Switch>
        <Route exact path ='/dashboard' component = {ExpensesDashboard}/>

        <Route exact path ='/create' component = {CreateExpenses}/>

        <Route exact path ='/notes' component ={Notes}/>

         <Route exact path ='/edit/:id' component={EditExpenses}/>
         
      
      </Switch>
      
      
     </BrowserRouter>
    </div>
  );
}

export default App;
