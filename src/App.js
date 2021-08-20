import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Alert from "./components/Alert";

function App() {
  return (<Router>
    <Alert />
    <div className="App">
      <Header />
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
