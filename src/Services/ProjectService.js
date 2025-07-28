// src/Services/projectService.js
import axios from 'axios';

const API_URL = 'http://localhost:5202/api/UserDetails';

// 🔍 Get projects by domain
export const getProjectsByDomain = async (domain) => {
  try {
    const response = await axios.get(`${API_URL}/by-domain`, {
      params: { domain },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching projects by domain:', error);
    throw error;
  }
};

// 🔍 Get project by ID
export const getProjectById = async (projectGuidId) => {
  try {
    const response = await axios.get(`${API_URL}/${projectGuidId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    throw error;
  }
};

// 📥 Book a project
export const bookProject = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/book`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error booking project:', error);
    throw error;
  }
};

export const getAllProjects = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};
