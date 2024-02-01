import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TimerProvider } from './context/TimerContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TimerProvider>
        <App/>
      </TimerProvider>
    </ThemeProvider>
    <Analytics/>
  </React.StrictMode>
);
