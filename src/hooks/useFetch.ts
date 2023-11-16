import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants.ts';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // ! give query params type
  const query = async (route: string, method: string, body?: Record<string, unknown>) => {
    try {
      let response: AxiosResponse;
      if (method === 'save') {
        response = await axios.post(`${API_URL}/${route}`, body);
      } else if (method === 'update') {
        response = await axios.put(`${API_URL}/${route}`, body);
      } else if (method === 'get') {
        response = await axios.get(`${API_URL}/${route}`);
      }
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  return { data, error, query };
};
