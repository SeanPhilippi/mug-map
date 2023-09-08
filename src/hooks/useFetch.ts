import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setData(data);
    }
    loadData();
  }, ['https://127.0.0.1:5000']);

  return data;
};
