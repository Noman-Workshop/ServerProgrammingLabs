import fs from 'fs';
import { Request, Response } from 'express';

const skills = fs.readFileSync('./src/app/data/skills.json', 'utf8');

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const skillsArray: { skills: any[] } = JSON.parse(skills);

const portfolio = (req: Request, res: Response) => {
	res.render('portfolio', { name: 'Noman', skills: skillsArray.skills });
};

export default portfolio;
