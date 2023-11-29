import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants.ts';
import { useSnackbar } from './useSnackbar';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const { showMessage } = useSnackbar();

  useEffect(() => {
    if (data?.message) {
      showMessage(data.message);
    }
    if (error) {
      console.log('==hitting showMessage for error', error);
      showMessage(error);
    }
  }, [data, error]);

  // ! give query params type
  const query = async (route: string, method: string, body?: Record<string, unknown>) => {
    console.log('==query body', body);
    try {
      let response: AxiosResponse;
      if (method === 'post') {
        response = await axios.post(`${API_URL}/${route}`, body);
      } else if (method === 'put') {
        response = await axios.put(`${API_URL}/${route}`, body);
      } else if (method === 'get') {
        response = await axios.get(`${API_URL}/${route}`);
      }
      console.log('==setting data', response.data);
      if (response.data) {
        setData(response.data);
        return response.data;
      }
    } catch (err) {
      console.log('==error in useFetch', err.response.data.message);
      if (err.response.data?.message) {
        setError(err.response.data.message);
        throw err.response.data.message;
      }
    }
  };

  return { data, error, query };
};

export default useFetch;
