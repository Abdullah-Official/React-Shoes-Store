import React from 'react'
import './App.css';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Products from './Products';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import DetailsPage from './DetailsPage';

function App() {
  return (
    <div className="App">
      <div className="circle"></div>
      <Router>
        <Navbar />
        <LandingPage />
        <Switch>
          
          <Route exact path="/details-page/:id" component={DetailsPage} />
          <Products />
        </Switch>
      </Router>
    </div>
  );
}

      

export default App;
