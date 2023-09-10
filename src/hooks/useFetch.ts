import { useState } from 'react';
import { API_URL } from '../constants.ts';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const query = async (route: string) => {
    try {
      const response = await fetch(`${API_URL}/${route}`);
      setData(response.json());
    } catch (err) {
      setError(err);
    }
  };

  return { data, error, query };
};
