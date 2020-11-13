import React from 'react';
import { Container, createMuiTheme, ThemeProvider, colors } from '@material-ui/core';
import Header from './comp/Header';
import Setting from './comp/Setting';
import Main from './comp/Main';
import { useStore } from './core/state-manager';
import { PageType } from './type/type';
import SimpleSnackbar from './comp/SnackBar';
const { green } = colors;

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
        <SimpleSnackbar />
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
