import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ExpensesDashboard from './Components/ExpensesDashboard';
import CreateExpenses from './Components/CreateExpenses';
import EditExpenses from './Components/EditExpenses';
import NoteFound from './Components/404Page';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Header/>
      <Switch>
        <Route exact path ='/dashboard' component = {ExpensesDashboard}/>

        <Route exact path ='/create' component = {CreateExpenses}/>

         <Route exact path ='/edit/:id' component={EditExpenses}/>
        <Route path='/*' component={NoteFound}/>
      </Switch>
      
      
     </BrowserRouter>
    </div>
  );
}

export default App;
