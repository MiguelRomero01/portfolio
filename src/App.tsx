import Navbar from './components/navbar/navbar'
import Home from './home/home'

function App() {
	return (
		<div>
			<Navbar />

			<main className="mt-20">
				<section id="home">
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
	)
}

export default App
