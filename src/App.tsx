import Navbar from '@/views/components/navbar';
import Home from '@/views/home/home';
import ParticlesBackground from '@/views/components/background.js';

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import About from './views/about/about';
import ContactView from './views/contact/contact';
import EducationView from './views/education/education';
import ExpertiseView from './views/expertise/expertise';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<ParticlesBackground />

			{/* Capa de contenido */}
			<div className="relative">
				<header>
					<Navbar />
				</header>

				<main className="mt-20">
					{/*Home section*/}
					<section id="home" className="flex justify-center min-h-screen pt-15 mb-10">
						<Home />
					</section>

					{/*About section*/}
					<section id="about" className="min-h-screen mb-50">
						<About />
					</section>

					{/*expertise section*/}
					<section id="education" className="min-h-screen mb-50">
						<EducationView />
					</section>
					<section id="soft-skills"></section>
					<section id="expertise" className="min-h-screen mb-50">
						<ExpertiseView />
					</section>
					<section id="projects"></section>
					<section id="contact" className="mt-500 mb-100">
						<ContactView />
					</section>
				</main>
			</div>
		</div>
	);
}

export default App;
