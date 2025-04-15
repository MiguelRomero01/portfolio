//react libreries
import { useMemo } from 'react';

//components
import SkillCard from './components/skillsCard';
import SectionTitle from '../components/sectionTitle';

//assets
import {
	Users,
	BookOpen,
	Brain,
	BarChart2,
	RefreshCw,
	Search,
	Rocket,
	Flame,
	Scale,
	Clock,
	Wrench,
} from 'lucide-react';
import SecondTitle from '../components/secondMainTitle';
import { animationPropsSoftSkills } from '@/controllers/animations/animationProps';

export default function SkillsView() {
	const { skills, mainText } = animationPropsSoftSkills;

	const skillsContent = useMemo(
		() => [
			{
				icon: <Flame />,
				percent: 100,
				text: 'Intrinsic motivation to learn and improve constantly.',
				title: 'Passion for Learning',
			},
			{
				icon: <Scale />,
				percent: 98,
				text: 'Commitment to integrity, responsibility, and discipline at work.',
				title: 'Work Ethic',
			},
			{
				icon: <Rocket />,
				percent: 90,
				text: 'Initiative to take action without waiting for instructions.',
				title: 'Proactivity',
			},
			{
				icon: <Users />,
				percent: 90,
				text: 'Ability to work in a team and collaborate effectively.',
				title: 'TeamWork',
			},
			{
				icon: <BookOpen />,
				percent: 90,
				text: 'Autonomous learning and continuous knowledge updating.',
				title: 'Self-Learning',
			},
			{
				icon: <BarChart2 />,
				percent: 88,
				text: 'Ability to analyze data and solve complex problems.',
				title: 'Analytical Thinking',
			},
			{
				icon: <Brain />,
				percent: 85,
				text: 'Ability to evaluate information and make well-founded decisions.',
				title: 'Critical Thinking',
			},

			{
				icon: <Wrench />,
				percent: 85,
				text: 'Ability to find practical solutions to difficult challenges.',
				title: 'Problem-Solving',
			},

			{
				icon: <RefreshCw />,
				percent: 80,
				text: 'Flexibility to adapt to changes and new environments.',
				title: 'Adaptability',
			},
			{
				icon: <Search />,
				percent: 80,
				text: 'Desire to explore new ideas and acquire knowledge.',
				title: 'Curiosity',
			},

			{
				icon: <Clock />,
				percent: 80,
				text: 'Ability to set goals and manage time efficiently, even under pressure.',
				title: 'Time Management',
			},
		],
		[]
	);

	return (
		<div className="bg-[#35353528] py-20">
			<header
				className="flex flex-col text-center items-center mx-5 lg:mx-100"
				data-aos={mainText.Animation}
				data-aos-delay={mainText.Delay}
				data-aos-duration={mainText.Duration}
			>
				<SectionTitle text="Soft Skills" backgroundColor="#10a6eb28" color="#10a6ebc2" />
				<SecondTitle title="Beyond the Code" />
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-30 mt-20">
				{skillsContent.map((item, index) => (
					<div
						className="transition-all hover:scale-105"
						data-aos={skills.Animation}
						data-aos-duratoin={skills.Duration}
						data-aos-delay={index * 100}
						key={index}
					>
						<SkillCard
							icon={item.icon}
							percent={item.percent}
							text={item.text}
							title={item.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
