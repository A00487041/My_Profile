import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance

// Create a root element for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app (you can remove this if you don't need it)
reportWebVitals();
