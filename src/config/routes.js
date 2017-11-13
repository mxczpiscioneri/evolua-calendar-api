import { Router } from 'express';

import UserController from '../controllers/UserController';
import CategoryController from '../controllers/CategoryController';
import EventController from '../controllers/EventController';

const routes = new Router();

// Users
routes.get('/users', UserController.getAll);
routes.get('/users/:id', UserController.getById);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);

// Categories
routes.get('/categories', CategoryController.getAll);
routes.get('/categories/:id', CategoryController.getById);
routes.post('/categories', CategoryController.create);
routes.delete('/categories/:id', CategoryController.delete);

// Events
routes.get('/events', EventController.getAll);
routes.get('/events/:id', EventController.getById);
routes.post('/events', EventController.create);
routes.delete('/events/:id', EventController.delete);

export default routes;