import express from 'express';
import portfolio from './controllers/portfolio.controller';
import form from './controllers/form.controller';

const apiRouter = express.Router();

apiRouter.use(form); 
apiRouter.get('/', portfolio);

export default apiRouter;
