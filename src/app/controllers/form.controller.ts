
import express, { Request, Response } from 'express';

const form = express.Router();

form.get('/form', (req: Request, res: Response) => {
	console.log('form');
	res.render('form');
});

form.post('/form', (req: Request, res: Response) => {
	console.log(req.body)
	res.send('Form submitted');
});

export default form;