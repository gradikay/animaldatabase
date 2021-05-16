// React required
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Components
import App from './App';
// -------------- Application Begins Bellow ------------ \\

// Render Application
ReactDOM.render(
    <Router>

        {/* App Component */}
        <App />

    </Router>,
  document.getElementById('root')
);
