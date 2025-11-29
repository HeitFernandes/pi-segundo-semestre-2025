import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

// ULR base do backend
export default axios.create({
  baseURL,
});

export const API_BASE_URL = baseURL;
