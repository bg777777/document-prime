import axios from 'axios';

const API_URL = 'http://localhost:3000'; 


export const getRecommendations = () => {
  return axios.get(`${API_URL}/recommendations`);
};

export const getTopRated = () => {
  return axios.get(`${API_URL}/top-rated`);
};


export const getRecentReleases = () => {
  return axios.get(`${API_URL}/recent-releases`);
};
