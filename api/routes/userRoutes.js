import express from "express";
import * as userController from '../controllers/userController.js';

const router = express.Router();

router
    .route('/users')
    .post(userController.createUser)
    .get(userController.getAllUsers);



export default router;