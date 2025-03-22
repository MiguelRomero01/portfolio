import SocialMedia from './components/socialMedia'
import TechBar from './components/techBar'
import styleFonts from '@assets/fonts.module.css'

export default function Home() {
	return (
		<div className="items-center">
			<div className="text-white text-center text-[800%]">
				<p id={styleFonts.MainTitle} className="pr-20 ">
					SOFTWARE
				</p>
				<p id={styleFonts.MainTitle} className="pl-20">
					DEVELOPER
				</p>
			</div>
			<TechBar />
			<SocialMedia />
		</div>
	)
}
