import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Profile from './pages/Profile';
import TypeTutor from './pages/TypeTutor';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login-register" component={LoginRegister} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="type-tutor" component={TypeTutor} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
