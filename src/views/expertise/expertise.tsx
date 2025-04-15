//libreries
import { useMemo } from 'react';

//assets
import { CodeXml, Database, PcCase } from 'lucide-react';
import CardExpertise from './components/cardExpertise';

//components
import SectionTitle from '../components/sectionTitle';
import SecondTitle from '../components/secondMainTitle';

//animations
import 'aos/dist/aos.css';
import { animationPropsExpertise } from '@/controllers/animations/animationProps';

export default function ExpertiseView() {
	const { expertise, mainText } = animationPropsExpertise;

	const infoExpertise = useMemo(
		() => [
			{
				title: 'Web Development',
				text: 'Development of modern web applications using cutting-edge technologies and industry best practices.',
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
			<header
				className="flex flex-col text-center items-center text-[1rem] mx-5 lg:mx-100"
				data-aos={mainText.Animation}
				data-aos-delay={mainText.Delay}
				data-aos-duration={mainText.Duration}
			>
				<SectionTitle text="Expertise" backgroundColor="#4dec9a32" color="#4dec9ae4" />
				<SecondTitle title="What I know & Do" />
				<span className="text-white/70">
					Through practice, self-learning and orientation, I've applied various aspects of
					development to solve different problems. Thanks to these achievements, I've received
					recognition from my professors and colleagues.
				</span>
			</header>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-[8%] mt-20">
				{infoExpertise.map((item, index) => (
					<div
						data-aos={expertise.Animation}
						data-aos-delay={index * 200}
						data-aos-duration={expertise.Duration}
						key={index}
					>
						<CardExpertise icon={item.icon} text={item.text} title={item.title} />
					</div>
				))}
			</section>
		</div>
	);
}
