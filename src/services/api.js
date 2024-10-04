import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const getRecommendations = () => {
  return axios.get(`${API_BASE_URL}/recommendations`);
};

export const getTopRated = () => {
  return axios.get(`${API_BASE_URL}/top-rated`);
};

export const getRecentReleases = () => {
  return axios.get(`${API_BASE_URL}/recent-releases`);
};
