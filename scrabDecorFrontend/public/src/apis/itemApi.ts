import axios from 'axios';

const API_URL = 'http://localhost:8000/api/items';

export const fetchItems = async () => {
    return await axios.get(API_URL);
};

export const createItem = async (item: { name: string; price: number; description: string; categoryId: number }) => {
    return await axios.post(API_URL, item);
};
