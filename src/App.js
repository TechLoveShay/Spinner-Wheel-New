// src/App.js
import React from 'react';
import './App.css'; // Keep this line to import your CSS styles
import SpinnerWheel from './SpinnerWheel'; // Import the SpinnerWheel component

function App() {
  return (
    <div>
      <h1>Welcome to the Spinner Wheel Game!</h1>
      <SpinnerWheel /> {/* Render the SpinnerWheel component */}
    </div>
  );
}

export default App;
