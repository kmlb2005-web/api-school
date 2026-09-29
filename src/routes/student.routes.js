import express from 'express';
import studentController from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', studentController.getAll);
router.get('/average/general', studentController.getGeneralAverage);
router.get('/:id', studentController.getById);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

export default router;
