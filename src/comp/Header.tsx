import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useStore } from '../core/state-manager';
import { PageType } from '../type/type';

function Header() {
  const [, setCurPage] = useStore<PageType>('cur-page', 'main');

  const gotoSettingPage = () => setCurPage('setting');

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          Real Owning
        </Typography>
        <IconButton color="default" onClick={gotoSettingPage}><SettingsIcon /></IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
