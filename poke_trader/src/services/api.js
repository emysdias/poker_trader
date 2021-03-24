import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api',
});

export default api;