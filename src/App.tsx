import Navbar from '@components/navbar/navbar'
import Home from '@home/home'
import ParticlesBackground from '@/components/backgroundAnimated/background.js'

import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		})

		setTimeout(() => {
			AOS.refresh()
		}, 1)
	}, [])

	return (
		<div>
			<ParticlesBackground />

			{/* Capa de contenido */}
			<div className="relative">
				<header>
					<Navbar />
				</header>

				<main className="mt-20">
					<section id="home" className="flex justify-center">
						<Home />
					</section>
					<section id="about"></section>
					<section id="services"></section>
					<section id="education"></section>
					<section id="soft-skills"></section>
					<section id="projects"></section>
					<section id="contact"></section>
				</main>
			</div>
		</div>
	)
}

export default App
