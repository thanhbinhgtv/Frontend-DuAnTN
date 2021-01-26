import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        { /*  */}
        <Header />

        <Switch>
          {/* Trang chu */}
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/booking">
            <Booking />
          </Route>
        </Switch>

        {/*  */}
        <Footer />
      </Router>

      {/* <Header></Header>
      <Home />
      <Footer /> */}
    </div>
  );
}

export default App;
