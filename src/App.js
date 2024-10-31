// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/mytown" className="nav-link">My Town</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/mytown" element={<MyTown />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
