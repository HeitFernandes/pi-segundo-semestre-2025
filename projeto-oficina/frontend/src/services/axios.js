import axios from 'axios';

// ULR base do backend
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
