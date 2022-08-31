import express from 'express';
import userRoutes from './routes/userRoutes.js'

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
    return res.json({
        msg: 'API activa',
    })
})

api.use(userRoutes)

export default api;