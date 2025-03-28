// Imports
import aboutMe_Img from '@assets/images/about-me.jpg';
import SectionTitle from '../components/sectionTitle';
import ContentTracker from './components/contentTracker';
import SecondTitle from '../components/secondMainTitle';

// Animations
import 'aos/dist/aos.css';
import { animationPropsAbout } from '@/controllers/animations/animationProps';

export default function About() {
	const { image, mainText, tracks } = animationPropsAbout;

	return (
		<div className="sm:block lg:flex backdrop-blur-[2px] bg-white/5 py-20">
			{/* Imagen */}
			{/*La imagen provoca que se trabe medio segundo*/}
			<aside
				className="sm:w-full lg:w-160 lg:ml-25 px-5 lg:flex-shrink-0 relative"
				data-aos={image.Animation}
				data-aos-delay={image.Delay}
				data-aos-duration={image.Duration}
			>
				<div className="absolute -inset-2 rounded-4xl bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-18"></div>
				<img src={aboutMe_Img} className="relative rounded-4xl shadow-2xl" />
			</aside>

			{/* Sección de texto */}
			<section className="mt-5 px-5 lg:pr-15 lg:ml-10 lg:mt-30">
				<div
					data-aos={mainText.Animation}
					data-aos-delay={mainText.Delay}
					data-aos-duration={mainText.Duration}
				>
					<SectionTitle color="#e8e" backgroundColor="rgba(238, 51, 238, 0.150)" text="About Me" />
					<SecondTitle title="Passionate about technology and learning" />
					<p className="text-gray-400 text-[1.1rem]">
						Hi, I'm Miguel Romero, a 19-year-old software engineering student. Throughout my
						studies, I've worked on multiple projects that have allowed me to deepen my
						understanding of technologies, software architecture, and teamwork.
						<br />
						<br />
						I hold certifications in Python, JavaScript, and Data Analysis, and I'm passionate about
						learning, collaborating in teams, and developing innovative solutions. These three
						qualities have shaped my discipline and problem-solving abilities.
						<br />
						<br />
						In team projects, I’m often chosen as the leader because of my decision-making skills
						and my ability to delegate tasks effectively. My teammates appreciate my structured
						approach to project management and my focus on achieving the best results together.
					</p>
				</div>

				{/* Trackers */}
				<div
					className="flex gap-20 mt-5"
					data-aos={tracks.Animation}
					data-aos-delay={tracks.Delay}
					data-aos-duration={tracks.Duration}
				>
					<ContentTracker quantity={5} text="projects on Github" color="#e3e" />
					<ContentTracker quantity={3} text="years of programming" color="#ab2" />
				</div>
			</section>
		</div>
	);
}
