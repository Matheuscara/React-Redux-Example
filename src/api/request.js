import axios from 'axios';


const api = axios.create({
  baseURL: 'https://portfolio-backend-dias.herokuapp.com/',
});


export const getPosts = () => api.get(`/posts`)