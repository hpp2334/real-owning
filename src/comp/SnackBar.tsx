import { Snackbar, IconButton } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import React, { useEffect } from "react";
import { useStore } from "../core/state-manager";
import { Message } from "../type/snackbar";

export default function SimpleSnackbar() {
  const [message, setMessage] = useStore<Message>('global-message', { message: '' });
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    message.message && setOpen(true);
  }, [message]);

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message.message}
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}