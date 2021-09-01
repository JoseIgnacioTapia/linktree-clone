import { useState } from 'react';
import './App.css';
import Linktree from './components/Linktree';
import UserProvider from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="container-app">
        <Linktree />
      </div>
    </UserProvider>
  );
}

export default App;
