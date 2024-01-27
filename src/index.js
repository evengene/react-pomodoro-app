import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { TimerProvider } from './context/TimerContext';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TimerProvider>
        <App/>
      </TimerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
