import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Visit from './Visit';
import NotFound from './NotFound';
import User from './User';

const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/user">USER</Link></li>
        <li><Link to="/visit">VISIT</Link></li>
      </ul>
    </div>

    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/visit" component={Visit}></Route>
      <Route component={NotFound}></Route>
    </Switch>

  </Router>
);

ReactDOM.render(routing,
  document.getElementById('root')
);

