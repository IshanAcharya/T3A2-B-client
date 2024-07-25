import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Profile from './components/Profile';
import TypeTutor from './pages/TypeTutor';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login-register" component={LoginRegister} />
        <Route path="/profile" component={Profile} />
        <Route path="/type-tutor" component={TypeTutor} />
      </Switch>
    </Router>
  );
}

export default App;
