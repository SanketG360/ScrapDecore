import React, { useState } from 'react';
import { createCategory } from '../services/categoryService';

const CategoryForm: React.FC = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createCategory({ name });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Category Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">Add Category</button>
        </form>
    );
};

export default CategoryForm;
