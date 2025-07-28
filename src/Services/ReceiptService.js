// Services/ReceiptService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5202/api/Receipt'; // Replace with your backend URL

export const createReceipt = async (receipt) => {
  const response = await axios.post(`${BASE_URL}/create`, receipt);
  return response.data;
};

export const getReceiptById = async (receiptId) => {
  const response = await axios.get(`${BASE_URL}/${receiptId}`);
  return response.data;
};

// Add this function if not already present
export const getReceiptsByUser = async (userId)  => {
  const response = await axios.get(`${BASE_URL}?userId=${userId}`);
  return response.data;
};

export const updateReceiptPayment = async (receiptId, updatedData) => {
  const response = await axios.put(`http://localhost:5202/api/Receipt/update-payment/${receiptId}`, updatedData);
  return response.data;
};

export const getAllReceipts = async () => {
  const response = await axios.get(`http://localhost:5202/api/Receipt`);
  return response.data;
};
