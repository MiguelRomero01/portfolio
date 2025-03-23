import { useEffect, useState } from 'react'

//SVGs
import Linkedin from '@assets/svg/socialMedia/linkedin.svg'
import GitHub from '@assets/svg/socialMedia/github.svg'
import Email from '@assets/svg/socialMedia/email.svg'

//animations
import AOS from 'aos'
import 'aos/dist/aos.css'
import { animationPropsHome } from '@/controllers/animations/animationProps'

export default function SocialMedia() {
	const [isDivVisible, setIsDivVisible] = useState<boolean>(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDivVisible(true)
			AOS.refresh()
		}, animationPropsHome.socialMedia.Delay)
		return () => clearTimeout(timer)
	}, [])

	const socialMediaArray = [
		{ label: 'Github', Icon: GitHub, link: '' },
		{ label: 'Email', Icon: Email, link: '' },
		{ label: 'Linkedin', Icon: Linkedin, link: '' },
	]

	return (
		<div className={`mr-4 absolute right-0 ${isDivVisible ? 'opacity-100' : 'opacity-0'}`}>
			{isDivVisible &&
				socialMediaArray.map((item, index) => (
					<a
						href={item.link}
						key={item.label}
						data-aos={animationPropsHome.socialMedia.Animation}
						data-aos-delay={index * 100}
						data-aos-duration={animationPropsHome.socialMedia.Duration}
						data-aos-easing={animationPropsHome.socialMedia.easing}
					>
						<img
							src={item.Icon}
							title={item.label}
							alt={item.label}
							className="size-9 ease-in hover:bg-white/20  hover:scale-110 transition mb-3 rounded-full bg-white/10 p-1"
						/>
					</a>
				))}
		</div>
	)
}
