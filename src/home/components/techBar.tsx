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
		<div className="max-w-max py-3 px-5 border-2 border-[#202126] bg-[#202126] rounded-4xl justify-self-center">
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
