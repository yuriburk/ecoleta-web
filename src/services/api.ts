import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecoletaapp.herokuapp.com',
});

export default api;
