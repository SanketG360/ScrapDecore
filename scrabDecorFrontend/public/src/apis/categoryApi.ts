import axios from 'axios';

const API_URL = 'http://localhost:8000/api/categories';

export const fetchCategories = async () => {
    return await axios.get(API_URL);
};

export const createCategory = async (category: { name: string }) => {
    return await axios.post(API_URL, category);
};
