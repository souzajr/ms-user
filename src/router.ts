import { Router } from 'express';
import userController from './controllers/user.controller';

const router: Router = Router();

router.get('/', userController.home);

export default router;
