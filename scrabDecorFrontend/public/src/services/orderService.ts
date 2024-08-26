import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getOrders = async () => {
    return await axios.get(`${API_URL}/orders`);
};

export const createOrder = async (data: { itemId: number; quantity: number; totalAmount: number }) => {
    return await axios.post(`${API_URL}/orders`, data);
};
