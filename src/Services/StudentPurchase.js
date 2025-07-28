import axios from 'axios';

const API_BASE_URL = 'http://localhost:5202/api/StudentPurchase'; // Change port if needed

// Get all student purchases
export const getAllStudentPurchases = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Get a single student purchase by ID
export const getStudentPurchaseById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Create a new student purchase
export const createStudentPurchase = async (purchase) => {
  const response = await axios.post(API_BASE_URL, purchase);
  return response.data;
};

// Update an existing student purchase
export const updateStudentPurchase = async (id, updatedPurchase) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedPurchase);
  return response.data;
};

// Delete a student purchase
export const deleteStudentPurchase = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
