import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/themes/light';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
