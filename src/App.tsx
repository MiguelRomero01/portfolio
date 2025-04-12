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

					{/**la seccion about y education provocan que se genere el bar x (se debe corregir)*/}
					{/*About section*/}
					<section id="about" className="min-h-screen mb-50">
						<About />
					</section>

					{/*expertise section*/}
					<section id="education" className="min-h-screen mb-50">
						<EducationView />
					</section>

					<section id="soft-skills" className="min-h-screen mb-50">
						<SkillsView />
					</section>
					<section id="expertise" className="min-h-screen">
						<ExpertiseView />
					</section>
					<section id="projects" className="min-h-screen mb-50">
						<ProjectsView />
					</section>
					<section id="contact" className="min-h-screen mb-0">
						<ContactView />
					</section>
				</main>
			</div>
		</div>
	);
}

export default App;
