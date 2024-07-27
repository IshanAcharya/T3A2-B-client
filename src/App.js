import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LoginRegister from './Pages/LoginRegister';
import Profile from './Pages/Profile';
import TypeTutor from './Pages/TypeTutor';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/type-tutor" element={<TypeTutor />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};


export default App;
