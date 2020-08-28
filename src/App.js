import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import AppNavbar from "./Component/layout/AppNavbar";
import Dashboard from "./Component/layout/Dashboard";
import AddClient from "./Component/clients/AddClient";
import ClientDetails from "./Component/clients/ClientDetails";
import EditClient from './Component/clients/EditClient';

import './App.css';


class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
      <div className="App">
        <AppNavbar />

<div className="container"> 
<Switch>
  <Route exact path="/" component={Dashboard} />
  <Route exact path="/client/add" component={AddClient} />
  <Route exact path="/client/:id" component={ClientDetails} />
  <Route exact path="/client/edit/:id" component={EditClient} />

</Switch>
</div>
        </div>
        </Router>
        </Provider>
    );
  }
}
export default App;
