import { Router } from 'express';

import UserController from '../controllers/UserController';

const routes = new Router();

// Users
routes.get('/users', UserController.getAll);

export default routes;