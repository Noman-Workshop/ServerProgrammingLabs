import { Request, Response } from 'express';
import { skills } from '../services/porfolio.service';

const portfolio = (req: Request, res: Response) => {
	res.render('portfolio', { name: 'Noman', email: 'mail@mail.com', skills: skills()});
};

export default portfolio;
