import express from "express";
import * as salesManController from '../controllers/salesManController.js';

const router = express.Router();

router
    .route('/salesMan')
    .post(salesManController.createSalesMan)
    .get(salesManController.getAllSalesMan);



export default router;