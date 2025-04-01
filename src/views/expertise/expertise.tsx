//libreries
import { useMemo } from 'react';

//assets
import { CodeXml, Database, PcCase } from 'lucide-react';
import CardExpertise from './components/cardExpertise';

//components
import SectionTitle from '../components/sectionTitle';
import SecondTitle from '../components/secondMainTitle';

export default function ExpertiseView() {
	const infoExpertise = useMemo(
		() => [
			{
				title: 'Web Development',
				text: 'Creation of modern web applications using various technologies and best practices.',
				icon: <CodeXml />,
			},
			{
				title: 'Data Science',
				text: 'Data processing, cleaning and analysis, along with the implementation of basic AI models.',
				icon: <Database />,
			},
			{
				title: 'BackEnd Development',
				text: 'Implementation of server logic with different programming languages to enhance and expand functionalities.',
				icon: <PcCase />,
			},
		],
		[]
	);
	return (
		<div>
			<header className="flex flex-col text-center items-center text-[1rem] mx-5 lg:mx-100">
				<SectionTitle text="Expertise" backgroundColor="#4dec9a4f" color="#4dec9ae4" />
				<SecondTitle title="My Expertise" />
				<span className="text-white/70">
					Through practice, self-learning and orientation, I've applied various aspects of
					development to solve different problems. Thanks to these achievements, I've received
					recognition from my professors and colleagues.
				</span>
			</header>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-[8%] mt-20">
				{infoExpertise.map((item, index) => (
					<CardExpertise icon={item.icon} text={item.text} title={item.title} key={index} />
				))}
			</section>
		</div>
	);
}
