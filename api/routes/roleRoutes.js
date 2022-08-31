import express from "express";
import * as roleController from '../controllers/roleController.js';

const router = express.Router();

router
    .route('/roles')
    .post(roleController.createRole)
    .get(roleController.getAllRoles);



export default router;