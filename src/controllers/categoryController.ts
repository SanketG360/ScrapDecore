import { Request, Response } from 'express';
import Category from '../models/Category';

export const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error creating category' });
    }
};

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
};
