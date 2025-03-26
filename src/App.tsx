import Navbar from '@/views/components/navbar';
import Home from '@/views/home/home';
import ParticlesBackground from '@/views/components/background.js';

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import About from './views/about/about';

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		});

		setTimeout(() => {
			AOS.refresh();
		}, 1);
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
					<section id="home" className="flex justify-center h-[90vh] pt-15">
						<Home />
					</section>

					{/*About section*/}
					<section id="about" className="h-[100vh]">
						<About />
					</section>

					{/*expertise section*/}
					<section id="expertise"></section>
					<section id="education"></section>
					<section id="soft-skills"></section>
					<section id="projects"></section>
					<section id="contact"></section>
				</main>
			</div>
		</div>
	);
}

export default App;
