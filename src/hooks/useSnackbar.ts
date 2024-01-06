import { useContext } from 'react';
import { SnackbarContext } from '../utils/snackbarContext.tsx';

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
