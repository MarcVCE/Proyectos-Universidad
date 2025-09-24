import express from 'express';
import controller from '../controllers/documentos';
const router = express.Router();

router.get('/status', controller.getStatus);
router.get('/freeseats/:dia/:mes/:anyo', controller.getFreeSeats);
router.post('/book/:dia/:mes/:anyo/:asiento', controller.book);
router.post('/free/:dia/:mes/:anyo/', controller.free);
export = router;