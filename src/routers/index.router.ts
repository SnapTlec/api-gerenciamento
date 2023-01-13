import { Router } from 'express';
import { AccountController } from '../controllers/Account.controller';
import { UserController } from '../controllers/User.controller';
import AccountValidationMiddleware from '../middlewares/Account.middleware';
import PersonvalidationMiddleware from '../middlewares/Person.middleware';

const routes = Router();

routes.post("/api/v1/user", PersonvalidationMiddleware, new UserController().create);

routes.post("/api/v1/account", AccountValidationMiddleware, new AccountController().create);

export default routes;