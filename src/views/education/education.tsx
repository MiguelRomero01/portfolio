//assets
import { Award, School } from 'lucide-react';
//components
import CardEducation from './components/card';
import SectionTitle from '../components/sectionTitle';
import SecondTitle from '../components/secondMainTitle';

export default function EducationView() {
	const contentEducation = [
		{
			title: 'Sofware engineering',
			icon: <School size={27} />,
			available: false,
			issuer: 'Universitaria de Colombia',
		},
		{
			title: 'Data Analysis',
			date: '12/2024',
			icon: <Award size={27} />,
			available: true,
			issuer: 'MINTIC',
			link: 'https://drive.google.com/file/d/1NAFS9p3tbZMCsE3SJ3f3nO0r0Z2vSpWJ/view?usp=sharing',
		},
		{
			title: 'JavaScript Essentials 1',
			date: '07/2024',
			icon: <Award size={27} />,
			available: true,
			issuer: 'CISCO',
			link: 'https://drive.google.com/file/d/1aHbCxpjoQxgR1os9hyCRyan94p727Swi/view?usp=sharing',
		},
		{
			title: 'Python Essentials',
			date: '12/2023',
			icon: <Award size={27} />,
			available: true,
			issuer: 'CISCO',
			link: 'https://drive.google.com/file/d/1pGNRjrY5arY-PyzBodTg2S_64ayWixw5/view?usp=sharing',
		},
	];

	return (
		<div className="">
			<header className="flex flex-col items-center text-[1rem] mx-5 lg:mx-100">
				<SectionTitle backgroundColor="#25a1cb21" color="#25a1cbd0" text="Education" />
				<SecondTitle title="Continuous Education" />
				<span className="text-gray-300/80 text-center">
					Committed to continuous learning and professional development through recognized
					certifications, including industry-specific credentials, technical training, and
					professional accreditations that enhance expertise and career growth.
				</span>
			</header>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-30 mt-20">
				{contentEducation.map((item, index) => (
					<CardEducation
						key={index}
						title={item.title}
						icon={item.icon}
						available={item.available}
						issuer={item.issuer}
						date={item.date}
						link={item.link}
					/>
				))}
			</section>
		</div>
	);
}
