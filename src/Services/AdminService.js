// src/Services/projectService.js

import axios from 'axios';

const API_BASE = 'http://localhost:5202/api/admin/projects'; // Update if different

export const uploadProject = async (formData) => {
  try {
    const response = await axios.post(API_BASE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};

// ✅ Get all projects
export const getAllProjects = async () => {
  try {
    const response = await axios.get(API_BASE);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw error;
  }
};

// ✅ Update a project by ID
export const updateProject = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Failed to update project:', error);
    throw error;
  }
};

// ✅ Delete a project by ID
export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete project:', error);
    throw error;
  }
};

// ✅ Get project by ID
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch project with ID ${id}:`, error);
    throw error;
  }
};
