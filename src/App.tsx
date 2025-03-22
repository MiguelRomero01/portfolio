import Navbar from '@components/navbar/navbar'
import Home from '@home/home'
import ParticlesBackground from '@/components/backgroundAnimated/background.js'

function App() {
	return (
		<div>
			<ParticlesBackground />

			{/* Capa de contenido */}
			<div className="relative z-10">
				<Navbar />

				<main className="mt-20">
					<section id="home" className="flex justify-center">
						<div className="max-w-fit">
							<Home />
						</div>
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
