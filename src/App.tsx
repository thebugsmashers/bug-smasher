import React from 'react';
import logo from './logo.svg';
import Bug from './features/bugs/bug';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
