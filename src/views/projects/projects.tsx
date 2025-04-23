import { useMemo } from 'react';

//components
import ActionAreaCard from './components/actionAreaCard';

//animations
import 'aos/dist/aos.css';

//controllers
import { animationPropsProjects } from '@/controllers/animations/animationProps';

//assets
//--icons
import reactIcon from '@assets/svg/technologies/react.svg';
import typescriptIcon from '@assets/svg/technologies/typescript.svg';
import cssIcon from '@assets/svg/technologies/css3.svg';
import gitIcon from '@assets/svg/technologies/gits.svg';
import PythonIcon from '@assets/svg/technologies/python.svg';
import JupyterIcon from '@assets/svg/technologies/jupyter.svg';
import TensorFlowIcon from '@assets/svg/technologies/tensorflow.svg';
import PandasIcon from '@assets/svg/technologies/Pandas.svg';

//--images
import EcommerceImg from '@assets/images/projects/e-commerce.png';
import AIprojectImg from '@assets/images/projects/mintic.png';
import BrainCancerImg from '@assets/images/projects/AI-project.png';

import SectionTitle from '../components/sectionTitle';
import SecondTitle from '../components/secondMainTitle';

const ProjectsView = () => {
	//animations props
	const { header, project } = animationPropsProjects;

	//Cards information for each card
	const infoCard = useMemo(
		() => [
			{
				title: 'E-commerce',
				mainText:
					'E-commerce webpage for cap sales with various features and real-time database connection',
				fullText:
					'This project consists of a website dedicated to the sale of aps. It includes various sections and features, as well as integrations that ensure its proper funcionality, including a real-time database conection. It is worth nothing that this project was developed during an early stage of my learning journey, when my knowledge of the technologies involved was still limited',
				imageURL: EcommerceImg,
				linkGit: 'https://github.com/MiguelRomero01/e-commerce',
				date: '2025-01-10',
				techString: ['React', 'Typescript', 'CSS', 'Git'],
				linkProject: 'https://fashionecommerce01.netlify.app',
				techsIcons: [reactIcon, typescriptIcon, cssIcon, gitIcon],
			},
			{
				title: 'AI Prediction Model',
				mainText:
					'Database refinement and AI prediction model for Paraguayan products (2025 – 2026-2).',
				fullText:
					'I refined the database using various techniques such as data visualization, filtering, and other preprocessing methods. Based on the cleaned data, I developed an AI-based prediction model covering the years 2025 to 2026-2. This project was part of my certification process with MINTIC.',

				imageURL: AIprojectImg,
				date: '2024-12-09',
				techString: ['Jupyter', 'Python', 'Pandas', 'TensorFlow', 'Git'],
				techsIcons: [PythonIcon, JupyterIcon, PandasIcon, gitIcon],
				linkProject:
					'https://colab.research.google.com/drive/1RmcTGj-KQYvCbNnUyDOuvxyEMN242Q4z?usp=sharing',
			},
			{
				title: 'Brain Cancer Detection with AI',
				mainText:
					'Development of an AI-based model capable of predicting the presence of brain cancer using MRI',
				fullText:
					'The project focuses on building an Artificial Intelligence model to detect different types of brain cancer using magnetic resonance imaging (MRI), classifing them into four categories: Glioma, Meningioma, Other Tumor, and No Tumor. The model achieved an accuracy of over 85% on the test set, demonstrating its effectiveness. To enhance the model’s generalization and performance, I implemented data augmentation techniques to artificially expand the training dataset.',
				imageURL: BrainCancerImg,
				date: '2025-20-04',
				techString: ['Python', 'Keras', 'TensorFlow', 'Jupyter'],
				techsIcons: [PythonIcon, JupyterIcon, TensorFlowIcon],
				linkProject:
					'https://colab.research.google.com/drive/1qn620Jqtya4ld5x85qmxetI3b_ldtOfN#scrollTo=NbQ6rod0_MYq',
			},
		],
		[]
	);

	return (
		<div className="bg-white/5 pt-1 pb-20">
			<header
				className="flex flex-col text-center items-center my-20"
				data-aos={header.Animation}
				data-aos-delay={header.Delay}
				data-aos-duration={header.Duration}
			>
				<SectionTitle text="Projects" backgroundColor="#25a1cb21" color="#25a1cbd0" />
				<SecondTitle title="Highlighted Projects" />
			</header>
			<div className="px-5 lg:px-25 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
				{infoCard.map((item, index) => (
					<div
						data-aos={project.Animation}
						data-aos-duration={project.Duration}
						data-aos-delay={index * 100}
						key={index}
					>
						<ActionAreaCard
							date={item.date}
							fullText={item.fullText}
							imageURL={item.imageURL}
							linkGit={item.linkGit}
							techsUsed_Text={item.techString}
							title={item.title}
							linkProject={item.linkProject}
							mainText={item.mainText}
							techsUsed_Icons={item.techsIcons}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsView;
