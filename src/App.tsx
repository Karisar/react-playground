import React from 'react';
import About from './about';
import Contacts from './contacts';
import Warnings from './warnings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { faHome, faEnvelopeOpenText, faBell, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className="main-menu">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faHome} /><span className="nav-text">Home</span></Link>
            </li>
            <li>
              <Link to="/contacts"><FontAwesomeIcon icon={faEnvelopeOpenText} /><span className="nav-text">Contacts</span></Link>
            </li>
            <li>
              <Link to="/warnings"><FontAwesomeIcon icon={faBell} /><span className="nav-text">Warnings</span></Link>
            </li>
            <li>
              <Link to="/about"><FontAwesomeIcon icon={faQuestionCircle} /><span className="nav-text">About</span></Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: "auto", padding: "30px 5px 15px 200px" }}>
          <Switch>
            <Route exact path="/" />
            <Route path="/about" component={About} />
            <Route path="/warnings" component={Warnings} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
