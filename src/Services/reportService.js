import axios from 'axios';

const API_BASE = 'http://localhost:5202/api/Report';

export const getProjectPurchaseReport = async () => {
  try {
    const response = await axios.get(`${API_BASE}/project-purchases`);
    return response.data;
  } catch (error) {
    console.error('Error fetching report:', error);
    throw error; // surface to UI
  }
};
