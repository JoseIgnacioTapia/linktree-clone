import React, { useContext } from 'react';
import ToUserPage from '../components/ToUserPage';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <span>Admin: José Ignacio Tapia</span>
      <p>
        ID: <span>100</span>
      </p>
      <div>
        <span>My Linktree:</span>
        <ToUserPage />
      </div>
    </div>
  );
};

export default Admin;
