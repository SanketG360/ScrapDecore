import React from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

const Items: React.FC = () => {
    return (
        <div>
            <h1>Items</h1>
            <ItemForm />
            <ItemList />
        </div>
    );
};

export default Items;
