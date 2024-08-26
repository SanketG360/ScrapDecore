import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<{ id: number, itemId: number, quantity: number, totalAmount: number }[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getOrders();
            setOrders(response.data);
        })();
    }, []);

    return (
        <ul>
            {orders.map((order) => (
                <li key={order.id}>
                    Order ID: {order.id} - Total Amount: ${order.totalAmount}
                </li>
            ))}
        </ul>
    );
};

export default OrderList;
