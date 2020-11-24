import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Login from './Login.js'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
