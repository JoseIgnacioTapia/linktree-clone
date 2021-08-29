import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Admin = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>Dashboard</h3>
      <span>Admin: José Ignacio Tapia</span>
      <div>
        <span>My Linktree:</span>
      </div>
    </div>
  );
};

export default Admin;
