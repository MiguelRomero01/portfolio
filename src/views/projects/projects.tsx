import { useMemo } from 'react';
import ActionAreaCard from './components/actionAreaCard';

import reactIcon from '@assets/svg/technologies/react.svg';
import typescriptIcon from '@assets/svg/technologies/typescript.svg';
import cssIcon from '@assets/svg/technologies/css3.svg';
import gitIcon from '@assets/svg/technologies/gits.svg';

//assets
import EcommerceImg from '@assets/images/projects/e-commerce.png';

const ProjectsView = () => {
	const infoCard = useMemo(
		() => [
			{
				title: 'E-commerce',
				mainText:
					'E-commerce webpage for cap sales with various features and real-time database connection',
				fullText:
					'This project consists of a website dedicated to the sale of aps. It includes various sections and features, as weel as integrations that ensure its proper funcionality, including a real-time database conection. It is worth nothing that this project was developed during an early stage of my learning journey, when my knowledge of the technologies involved was still limited',
				imageURL: EcommerceImg,
				linkGit: 'https://github.com/MiguelRomero01/e-commerce',
				date: '2024-12-25',
				techString: ['React', 'Typescript', 'CSS'],
				linkProject: 'https://fashionecommerce01.netlify.app',
				buttonText: 'I Got It!',
				techsIcons: [reactIcon, typescriptIcon, cssIcon, gitIcon],
			},
			{
				linkProject:
					'https://colab.research.google.com/drive/1RmcTGj-KQYvCbNnUyDOuvxyEMN242Q4z?usp=sharing',
			},
		],
		[]
	);

	return (
		<div className="px-5 lg:px-25 grid grid-cols-1 lg:grid-cols-2 gap-8">
			{infoCard.map((item, index) => (
				<ActionAreaCard
					date={item.date}
					fullText={item.fullText}
					imageURL={item.imageURL}
					linkGit={item.linkGit}
					techsUsed_Text={item.techString}
					title={item.title}
					buttonText={item.buttonText}
					linkProject={item.linkProject}
					mainText={item.mainText}
					techsUsed_Icons={item.techsIcons}
					key={index}
				/>
			))}
		</div>
	);
};

export default ProjectsView;
