import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  Link
} from 'react-router-dom';
import './App.css';

// Componentele paginilor
import Login from './Components/Login/Login';
import EmployeePage from './Components/EmployeePage'; 
import FreeDaysPage from './Components/FreeDaysPage'; 

function App() {
  return (
    <Router>
      <div className="app">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/employees">Employee</Link></li>
              <li><Link to="/free-days">Free Days</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/employees" element={<EmployeePage />} />
            <Route path="/free-days" element={<FreeDaysPage />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;