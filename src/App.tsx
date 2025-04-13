//react
import { useEffect } from 'react';

//animations
import 'aos/dist/aos.css';
import AOS from 'aos';

//components
import Navbar from '@/views/components/navbar';
import Home from '@/views/home/home';
import ParticlesBackground from '@/views/components/background.js';
import About from './views/about/about';
import EducationView from './views/education/education';
import ExpertiseView from './views/expertise/expertise';
import ContactView from './views/contact/contact';
import SkillsView from './views/softSkills/softSkills';
import ProjectsView from './views/projects/projects';

function App() {
	useEffect(() => {
		AOS.init({ once: true });
	}, []);

	return (
		<div>
			<ParticlesBackground />

			{/* Capa de contenido */}
			<div className="relative">
				<header className=" ">
					<Navbar />
				</header>

				<main className="mt-20">
					{/*Home section*/}
					<section id="home" className="flex justify-center min-h-screen pt-15 mb-10">
						<Home />
					</section>
					{/*About section*/}
					<section id="about" className="min-h-screen mb-40">
						<About />
					</section>
					{/* expertise section */}
					<section id="education" className="min-h-screen mb-20 pt-20">
						<EducationView />
					</section>
					{/* soft skills section */}
					<section id="soft-skills" className="min-h-screen mb-20">
						<SkillsView />
					</section>
					{/* expertise section */}
					<section id="expertise" className="min-h-screen pt-20">
						<ExpertiseView />
					</section>
					{/* projects section */}
					<section id="projects" className="min-h-screen mb-10">
						<ProjectsView />
					</section>
					{/* contact section */}
					<section id="contact" className="min-h-screen mb-5 pt-20">
						<ContactView />
					</section>
				</main>
			</div>
		</div>
	);
}

export default App;
