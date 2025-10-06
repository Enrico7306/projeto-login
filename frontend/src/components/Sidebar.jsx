import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{
      width: '250px',
      height: '100vh',
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
    }}>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </li>
        <li>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

