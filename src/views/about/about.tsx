//images
import aboutMe_Img from '@assets/images/aboutMe.png';
import SectionTitle from '../components/sectionTitle';
import ContentTracker from './components/contentTracker';

export default function About() {
	return (
		<div className="sm:block lg:flex  bg-white/5 py-20">
			<aside className="sm:w-[100%] lg:w-160 lg:ml-25 px-5 lg:flex-shrink-0 relative">
				<div className="absolute -inset-2 rounded-4xl bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-18"></div>
				<img src={aboutMe_Img} alt="about-me image" className="relative rounded-4xl shadow-2xl" />
			</aside>

			{/**about me text */}
			<section className="mt-5 px-5 lg:pr-15 lg:ml-10 lg:mt-30">
				<SectionTitle color="#e8e" backgroundColor="rgba(238, 51, 238, 0.150)" text="About Me" />
				<h2 className="font-bold text-white text-4xl my-6">
					Passionate about technology and learning
				</h2>
				<span className="text-gray-400 text-[1.1rem]">
					Hi, I'm Miguel Romero, a 19-year-old software engineering student. Throughout my studies,
					I've worked on multiple projects that have allowed me to deepen my understanding of
					technologies, software architecture, and teamwork. <br />
					<br /> I hold certifications in Python, JavaScript, and Data Analysis, and I'm passionate
					about learning, collaborating in teams, and developing innovative solutions. These three
					qualities have shaped my discipline and problem-solving abilities. <br />
					<br />
					In team projects, I’m often chosen as the leader because of my decision-making skills and
					my ability to delegate tasks effectively. My teammates appreciate my structured approach
					to project management and my focus on achieving the best results together.
				</span>

				<div className="flex gap-20 mt-5">
					<ContentTracker quantity={5} text="projects on Github" color="#e3e" />
					<ContentTracker quantity={3} text="years of programming" color="#ab2" />
				</div>
			</section>
		</div>
	);
}
