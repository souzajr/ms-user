import { Router } from 'express';
import userController from './controllers/user.controller';

const router: Router = Router();

router.post(`/${process.env.VERSION}/login`, userController.home);

export default router;
