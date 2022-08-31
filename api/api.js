import express from 'express';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import salesManRoutes from './routes/salesManRoutes.js'

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
    return res.json({
        msg: 'API activa',
    })
})

api.use(userRoutes);
api.use(roleRoutes);
api.use(salesManRoutes)

export default api;