import { createContext, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export const SnackbarContext = createContext({
  message: '',
  showMessage: (msg: string) => {
    console.log('msg', msg);
    // ! need to set message in some way for Snackbar?
  },
});

export const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const showMessage = msg => {
    setMessage(msg);
  };

  const handleClose = () => {
    setMessage('');
  };

  return (
    <SnackbarContext.Provider value={{ message, showMessage }}>
      {children}
      <Snackbar
        open={Boolean(message.length > 0)}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </SnackbarContext.Provider>
  );
};
