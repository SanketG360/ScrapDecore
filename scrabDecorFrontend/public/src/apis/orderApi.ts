import axios from 'axios';

const API_URL = 'http://localhost:8000/api/orders';

export const fetchOrders = async () => {
    return await axios.get(API_URL);
};

export const createOrder = async (order: { itemId: number; quantity: number; totalAmount: number }) => {
    return await axios.post(API_URL, order);
};
