import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/login" element={<LoginPage/>} exact />
        <Route path="/register" element={<RegisterPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
