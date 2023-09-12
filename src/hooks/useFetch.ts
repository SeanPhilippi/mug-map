import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants.ts';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const query = async (route: string, body?: Record<string, unknown>) => {
    try {
      let response: AxiosResponse;
      if (body) {
        response = await axios.post(`${API_URL}/${route}`, body);
      } else {
        response = await axios.get(`${API_URL}/${route}`);
      }
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  return { data, error, query };
};
