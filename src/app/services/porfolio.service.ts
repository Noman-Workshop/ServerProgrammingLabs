import fs from 'fs';

const skillsRaw = fs.readFileSync('./src/app/data/skills.json', 'utf8');

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const skillsArray: { skills: any[] } = JSON.parse(skillsRaw);

const skills = () => {
	return skillsArray.skills;
};

export {skills};