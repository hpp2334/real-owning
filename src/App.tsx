import React, { useState } from 'react';
import { Container, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import Header from './comp/Header';
import Setting from './comp/Setting';
import Main from './comp/Main';
import { purple } from '@material-ui/core/colors';
import green from '@material-ui/core/colors/green';
import { useStore } from './core/state-manager';
import { PageType } from './type/type';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  const [curPage, setCurPage] = useStore<PageType>('cur-page', 'main');

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="lg" style={{ marginTop: '100px' }}>
          {curPage === 'setting' && <Setting onSaveSetting={() => setCurPage('main')} />}
          {curPage === 'main' && <Main />}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
