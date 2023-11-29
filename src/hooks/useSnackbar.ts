import { useContext } from 'react';
import { SnackbarContext } from '../utils/snackbarContext.tsx';

export const useSnackbar = () => {
  console.log('useSnackbar fired');
  return useContext(SnackbarContext);
};
