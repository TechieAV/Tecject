import axios from 'axios';

const BASE_URL = 'http://localhost:5202/api/Dashboard'; // adjust if needed

export const getDashboardSummary = async () => {
  const response = await axios.get(`${BASE_URL}/summary`);
  return response.data;
};

export const getMonthlySales = async () => {
  const response = await axios.get(`${BASE_URL}/sales`);
  return response.data;
};

export const getRecentActivity = async () => {
  const response = await axios.get(`${BASE_URL}/activity`);
  return response.data;
};
