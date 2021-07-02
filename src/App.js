import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className="app">
      <Router>

        <Switch>

          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
