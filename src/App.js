import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginRegister from './components/LoginRegister';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import TypingPractice from './components/TypingPractice';
import FreeTyping from './components/FreeTyping';
import ViewSessions from './components/ViewSessions';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login-register" component={LoginRegister}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/typing-practice" component={TypingPractice}/>
        <Route path="/free-typing" component={FreeTyping}/>
        <Route path="/view-sessions" component={ViewSessions}/>
      </Switch>
    </Router>
  );
}

export default App;
