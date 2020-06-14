import React from 'react';
import './App.css';
import Topnavbar from './components/topnavbar/Topnavbar';
import Workarea from './components/workarea/Workarea';


function App() {

  // Render Component
  return (
    <div className="App">
      <Topnavbar />
      <Workarea />
    </div>
  );
}

export default App;