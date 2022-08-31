import express from 'express';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import salesManRoutes from './routes/salesManRoutes.js';
import administratorRoutes from './routes/administratorRoutes.js';
import productRoutes from './routes/productRoutes.js'

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
    return res.json({
        msg: 'API activa',
    })
})

api.use(userRoutes);
api.use(roleRoutes);
api.use(salesManRoutes);
api.use(administratorRoutes);
api.use(productRoutes);

export default api;