import React from 'react';
import HeaderBar from './features/dashboard/containers/HeaderBar';
import BugsDisplay from './features/dashboard/containers/BugsDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <BugsDisplay />
    </div>
  );
}

export default App;
