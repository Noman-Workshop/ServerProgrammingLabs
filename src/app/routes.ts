import express from 'express';
import portfolio from './controllers/portfolio.controller';

const apiRouter = express.Router();

apiRouter.get('/', portfolio);

export default apiRouter;
