import path from 'path';
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';


import apiRouter from './routes';
import ConsoleLogger from '../utils/logging';

const app = express();
const port = process.env.DEV_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../../views'));

app.use(apiRouter);
const logger = ConsoleLogger(__filename);

app.listen(port, () => {
	logger.info(`Example app listening on port ${port}`);
});
