import { useState, useEffect } from 'react';

//assets
import styleFonts from '@assets/fonts.module.css';
import { ArrowRight } from 'lucide-react';

//components
import SocialMedia from './components/socialMedia';
import TechBar from './components/techBar';

//aniamtion
import 'aos/dist/aos.css';
import { animationPropsHome } from '@/controllers/animations/animationProps';
import { Link } from 'react-scroll';

export default function Home() {
	const [isDivVisible, setIsDivVisible] = useState<boolean>(false);

	//animated text
	const [softwareText, setSoftwareText] = useState<string>('');
	const [developerText, setDeveloperText] = useState<string>('');
	const softwareFull: string = 'SOFTWARE';
	const developerFull: string = 'DEVELOPER';

	//text animation
	useEffect(() => {
		// Función para animar la escritura de texto
		const animateText = (text: string, setter: (value: string) => void, delay: number) => {
			let currentText = ''; // Mantiene el estado actual del texto dentro del useEffect
			text.split('').forEach((char, index) => {
				setTimeout(() => {
					currentText += char;
					setter(currentText); // Se actualiza con el texto acumulado manualmente
				}, delay * index);
			});
		};

		animateText(softwareFull, setSoftwareText, 130);

		setTimeout(() => {
			animateText(developerFull, setDeveloperText, 130);
		}, softwareFull.length * 130 + 200);
	}, []);

	//button animation delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDivVisible(true);
		}, animationPropsHome.buttonAnimated.Delay);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="items-center justify-center text-white">
				{/* software developer text with its animation*/}
				<div className="text-center font-bold text-[400%] md:text-[600%] lg:text-[800%]">
					<p id={styleFonts.MainTitle} className="">
						{softwareText}
					</p>
					<p
						id={styleFonts.MainTitle}
						className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-pink-500"
					>
						{developerText}
					</p>
				</div>
				<TechBar />

				{/* get started button */}
				{isDivVisible && (
					<div className="flex justify-center py-5">
						<Link
							to="about"
							smooth={true}
							duration={500}
							offset={-50}
							className="flex items-center space-x-2"
						>
							<button
								data-aos={animationPropsHome.buttonAnimated.Animation}
								data-aos-duration={animationPropsHome.buttonAnimated.Duration}
								className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-2xl font-semibold py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
							>
								Get Started
								<ArrowRight />
							</button>
						</Link>
					</div>
				)}
			</div>

			<SocialMedia />
		</>
	);
}
