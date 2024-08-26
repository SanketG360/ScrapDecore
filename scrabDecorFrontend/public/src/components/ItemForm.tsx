import React, { useEffect, useState } from 'react';
import { createItem } from '../services/itemService';
import { getCategories } from '../services/categoryService';

const ItemForm: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState<number>(0);
    const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getCategories();
            setCategories(response.data);
        })();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createItem({ name, price, description, categoryId });
        setName('');
        setPrice(0);
        setDescription('');
        setCategoryId(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Item Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
            />
            <textarea 
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))} required>
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
