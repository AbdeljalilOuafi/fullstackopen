import axios from 'axios';

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getAll = () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error('Failed to fetch data');
    });
};

export default { getAll };