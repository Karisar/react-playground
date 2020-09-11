import React from 'react';
import About from './about';
import Contacts from './contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { faHome, faEnvelopeOpenText, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <div className="navBar">
              <nav>
                <Link className="navLink" to="/about"><FontAwesomeIcon icon={faHome} /> &nbsp;About</Link>
                <Link className="navLink" to="/contacts"><FontAwesomeIcon icon={faEnvelopeOpenText} /> &nbsp;Contacts</Link>
                <Link className="navLink" to="/contacts"><FontAwesomeIcon icon={faBell} /> &nbsp;Notifications</Link>
              </nav>
            </div>
            <div>

            </div>
          </div>

        </header>
        <main>
          <Switch>
            <Route exact path="/" />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
