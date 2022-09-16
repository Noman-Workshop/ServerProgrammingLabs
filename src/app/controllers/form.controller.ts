import express, { Request, Response } from 'express';
import { skills } from '../services/porfolio.service';

const form = express.Router();

form.get('/form', (req: Request, res: Response) => {
	res.render('form');
});

form.post('/form', (req: Request, res: Response) => {
	const {name, email} = req.body;
	res.render('portfolio', { name, email, skills: skills()});
});

export default form;