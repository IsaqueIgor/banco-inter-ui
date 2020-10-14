import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import theme from './styles/themes/light';
import { AuthProvider } from './contexts/auth';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes />
          <GlobalStyles />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
