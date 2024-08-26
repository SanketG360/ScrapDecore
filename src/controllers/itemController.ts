import { Request, Response } from 'express';
import Item from '../models/Item';

export const createItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error creating item' });
    }
};

export const getItems = async (req: Request, res: Response) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching items' });
    }
};
