//SVG logos imports
import PythonLogo from '@assets/svg/technologies/python.svg'
import JavaLogo from '@assets/svg/technologies/java.svg'
import JSLogo from '@assets/svg/technologies/js.svg'
import PostgreSQL from '@assets/svg/technologies/postgresql.svg'
import JupyterLogo from '@assets/svg/technologies/jupyter.svg'
import CssLogo from '@assets/svg/technologies/css3.svg'
import GitLogo from '@assets/svg/technologies/gits.svg'
import HtmlLogo from '@assets/svg/technologies/html.svg'
import ReactLogo from '@assets/svg/technologies/react.svg'
import TailwindLogo from '@assets/svg/technologies/tailwind.svg'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { animationProps } from '@/controllers/animations/animationProps'

export default function TechBar() {
	const [isDivVisible, setIsDivVisible] = useState<boolean>(false)

	// Simular carga del div con una pequeña demora
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDivVisible(true)
			AOS.refresh() // Refrescar AOS después de cambiar el estado
		}, animationProps.techBar.Delay) // Ajusta el tiempo según la animación del div principal

		return () => clearTimeout(timer)
	}, [])

	const techLogos = [
		{ name: 'Python', Logo: PythonLogo },
		{ name: 'Java', Logo: JavaLogo },
		{ name: 'PostgreSQL', Logo: PostgreSQL },
		{ name: 'JavaScript', Logo: JSLogo },
		{ name: 'Git', Logo: GitLogo },
		{ name: 'HTML', Logo: HtmlLogo },
		{ name: 'CSS', Logo: CssLogo },
		{ name: 'React', Logo: ReactLogo },
		{ name: 'Tailwind', Logo: TailwindLogo },
		{ name: 'Jupyter', Logo: JupyterLogo },
	]

	return (
		<div
			className={`max-w-max py-3 px-5 border-2 border-[#202126] bg-[#202126] rounded-4xl justify-self-center transition-opacity duration-500 ${
				isDivVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<ul className="flex gap-10">
				{isDivVisible &&
					techLogos.map((item, index) => (
						<li
							key={item.name}
							data-aos={animationProps.techBarElements.Animation}
							data-aos-delay={index * 100}
							data-aos-duration={animationProps.techBarElements.Duration}
						>
							<img
								src={item.Logo}
								alt={item.name}
								title={item.name}
								className="transition ease-in hover:scale-110 w-12"
							/>
						</li>
					))}
			</ul>
		</div>
	)
}
