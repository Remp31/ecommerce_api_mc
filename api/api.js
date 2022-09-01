import express from 'express';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import salesManRoutes from './routes/salesManRoutes.js';
import administratorRoutes from './routes/administratorRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import shoppingCartRoutes from './routes/shoppingCartRoutes.js';
import typeDiscountCouponRoutes from './routes/typeDiscountCouponRoutes.js';
import discountCoupon from './routes/DiscountCouponRoutes.js';

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
api.use(categoryRoutes);
api.use(shoppingCartRoutes);
api.use(typeDiscountCouponRoutes);
api.use(discountCoupon);

export default api;