import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import { TimerProvider } from './context/TimerContext';
import { CustomThemeProvider } from './context/ThemeContext';
import { theme} from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <CustomThemeProvider>
      <TimerProvider>
        <App/>
      </TimerProvider>
    </CustomThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
