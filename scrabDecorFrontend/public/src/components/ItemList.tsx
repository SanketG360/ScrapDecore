import React, { useEffect, useState } from 'react';
import { getItems } from '../services/itemService';

const ItemList: React.FC = () => {
    const [items, setItems] = useState<{ id: number, name: string, price: number }[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getItems();
            setItems(response.data);
        })();
    }, []);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
