//SVG logos imports
import PythonLogo from '@assets/svg/technologies/python.svg';
import JavaLogo from '@assets/svg/technologies/java.svg';
import JSLogo from '@assets/svg/technologies/js.svg';
import PostgreSQL from '@assets/svg/technologies/postgresql.svg';
import TensorFlowLogo from '@assets/svg/technologies/tensorflow.svg';
import CssLogo from '@assets/svg/technologies/css3.svg';
import GitLogo from '@assets/svg/technologies/gits.svg';
import HtmlLogo from '@assets/svg/technologies/html.svg';
import ReactLogo from '@assets/svg/technologies/react.svg';
import TailwindLogo from '@assets/svg/technologies/tailwind.svg';
import TypescriptLogo from '@assets/svg/technologies/typescript.svg';

import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationPropsHome } from '@/controllers/animations/animationProps';

export default function TechBar() {
	const [isDivVisible, setIsDivVisible] = useState(false);

	// Simular carga del div con una pequeña demora
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDivVisible(true);
			AOS.refresh();
		}, animationPropsHome.techBar.Delay);

		return () => clearTimeout(timer);
	}, []);

	//evita que los logos se creen en cada render
	const techLogos = useMemo(
		() => [
			{ name: 'Python', Logo: PythonLogo },
			{ name: 'Java', Logo: JavaLogo },
			{ name: 'PostgreSQL', Logo: PostgreSQL },
			{ name: 'JavaScript', Logo: JSLogo },
			{ name: 'Typescript', Logo: TypescriptLogo },
			{ name: 'Git', Logo: GitLogo },
			{ name: 'HTML', Logo: HtmlLogo },
			{ name: 'CSS', Logo: CssLogo },
			{ name: 'React', Logo: ReactLogo },
			{ name: 'Tailwind', Logo: TailwindLogo },
			{ name: 'TensorFlow', Logo: TensorFlowLogo },
		],
		[]
	);

	return (
		<div
			className={`max-w-full py-3 px-5 border-2 border-[#202126] bg-[#202126] rounded-4xl justify-self-center transition-opacity duration-500 ${
				isDivVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
				{isDivVisible &&
					techLogos.map((item, index) => (
						<li
							key={item.name}
							data-aos={animationPropsHome.techBarElements.Animation}
							data-aos-delay={index * 100}
							data-aos-duration={animationPropsHome.techBarElements.Duration}
							className="flex items-center justify-center m-1"
						>
							<img
								src={item.Logo}
								alt={item.name}
								title={item.name}
								className="transition ease-in hover:scale-110 w-8 sm:w-7 md:w-11"
							/>
						</li>
					))}
			</ul>
		</div>
	);
}
