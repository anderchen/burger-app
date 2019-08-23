import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-1bea9.firebaseio.com/'
});

export default instance;