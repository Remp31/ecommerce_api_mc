import express from "express";
import * as administratorController from '../controllers/administratorController.js';

const router = express.Router();

router
    .route('/administrator')
    .post(administratorController.createAdministrator)
    .get(administratorController.getAllAdministrator);



export default router;