//SVG logos imports
import PythonLogo from '@assets/technologies/python.svg'
import JavaLogo from '@assets/technologies/java.svg'
import JSLogo from '@assets/technologies/js.svg'
import PostgreSQL from '@assets/technologies/postgresql.svg'
import JupyterLogo from '@assets/technologies/jupyter.svg'
import CssLogo from '@assets/technologies/css3.svg'
import GitLogo from '@assets/technologies/gits.svg'
import HtmlLogo from '@assets/technologies/html.svg'
import ReactLogo from '@assets/technologies/react.svg'
import TailwindLogo from '@assets/technologies/tailwind.svg'

export default function TechBar() {
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
		<div className="max-w-max py-3 px-5 border-2 border-black rounded-4xl justify-self-center">
			<ul className="flex gap-10">
				{techLogos.map((item) => (
					<li key={item.name} className="transition hover:scale-110 ease-in cursor-pointer ">
						<img src={item.Logo} width={45} alt={item.name} title={item.name} />
					</li>
				))}
			</ul>
		</div>
	)
}
