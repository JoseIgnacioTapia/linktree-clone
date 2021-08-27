import { useState } from 'react';
import './App.css';
import Linktree from './components/Linktree';

function App() {
  const [usercheck, setUsercheck] = useState(null);
  const [passwordcheck, setPasswordcheck] = useState(null);

  return (
    <div className="container-app">
      <Linktree />
    </div>
  );
}

export default App;
