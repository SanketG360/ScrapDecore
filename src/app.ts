import express from 'express';
import categoryRoutes from './routes/categoryRoutes';
import itemRoutes from './routes/itemRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/api', categoryRoutes);
app.use('/api', itemRoutes);
app.use('/api', orderRoutes);

export default app;
