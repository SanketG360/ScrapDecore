import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getCategories = async () => {
    return await axios.get(`${API_URL}/categories`);
};

export const createCategory = async (data: { name: string }) => {
    return await axios.post(`${API_URL}/categories`, data);
};
