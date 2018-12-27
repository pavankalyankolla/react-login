// import logo from './logo.svg';

import React from 'react';
import './App.css';
import Login from "./1-login";
import Signup from "./2-signup";
import forgot from "./3-forgot";
import Welcome from "./4-welcome";

import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";


const AppRouter = () => (
  <Router>
    <div className="container">
      {/* <nav>
        <ol>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup/">Signup</Link></li>
            <li><Link to="/forgot/">Forgot</Link></li>
        </ol>
      </nav> */}


      <Route path="/login" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot" component={forgot} />
      <Route path="/welcome" component={Welcome}/>
      <Redirect from="/" to="/login" />

    </div>
  </Router>
);
export default AppRouter;
