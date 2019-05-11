import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { LocalizeProvider } from "react-localize-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Impressum from './components/Impressum';
import Intro from './components/Intro';
import PrivacyPolicy from './components/PrivacyPolicy';
import Welcome from './components/Welcome';


ReactGA.initialize('UA-139948577-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    return (
        <div>
            <LocalizeProvider>
                <Switch>
                    <Route exact path='/' component={Intro} />
                    <Route path='/home' component={Home} />
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/privacy_policy' component={PrivacyPolicy} />
                    <Route path='/impressum' component={Impressum} />
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
