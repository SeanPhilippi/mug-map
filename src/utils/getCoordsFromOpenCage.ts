import axios, { AxiosResponse } from 'axios';

const getCoordsFromOpenCage = async (address: string) => {
  const apiKey = import.meta.env.VITE_APP_OPEN_CAGE_KEY;
  const response: AxiosResponse = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`,
  );
  return response.data.results[0].geometry;
};

export default getCoordsFromOpenCage;

