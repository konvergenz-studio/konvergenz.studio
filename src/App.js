import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Router, Link} from 'react-router-dom';
import { LocalizeProvider } from "react-localize-redux";

import Intro from './components/Intro';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Impressum from './components/Impressum';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-139948577-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div>
      <LocalizeProvider>
        <Switch>
          <Route  path='/intro' component={Intro}/>
          <Route path='/home' component={Home}/>
          <Route exact path='/' component={Welcome}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/privacy_policy' component={PrivacyPolicy}/>
          <Route path='/impressum' component={Impressum}/>
        </Switch>
      </LocalizeProvider>
    </div>
  );
}

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById("app"));
