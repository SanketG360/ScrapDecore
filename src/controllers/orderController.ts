import { Request, Response } from 'express';
import Order from '../models/Order';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error creating order' });
    }
};

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
};
