import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getItems = async () => {
    return await axios.get(`${API_URL}/items`);
};

export const createItem = async (data: { name: string; price: number; description?: string; categoryId: number }) => {
    return await axios.post(`${API_URL}/items`, data);
};
