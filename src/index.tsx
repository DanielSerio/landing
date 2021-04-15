import React from 'react';
import ReactDOM from 'react-dom';
import './vars.css';
import './index.css';
import './typography.css';
import './theme.css';
import { ThemeProvider } from './state/ThemeContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);