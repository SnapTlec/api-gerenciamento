import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
import validationMiddleware from '../middlewares/Person.middleware';

const routes = Router();

routes.get('/api', validationMiddleware, new UserController().create);

export default routes;