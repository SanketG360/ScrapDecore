import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryService';

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getCategories();
            setCategories(response.data);
        })();
    }, []);

    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>{category.name}</li>
            ))}
        </ul>
    );
};

export default CategoryList;
