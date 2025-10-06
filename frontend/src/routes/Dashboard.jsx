import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: '20px' }}>
          <h2>Dashboard funcionando!</h2>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

