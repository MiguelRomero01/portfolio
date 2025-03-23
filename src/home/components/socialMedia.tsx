import { useEffect, useState } from 'react'

//SVGs
import Linkedin from '@assets/svg/socialMedia/linkedin.svg'
import GitHub from '@assets/svg/socialMedia/github.svg'
import Email from '@assets/svg/socialMedia/email.svg'

//animations
import AOS from 'aos'
import 'aos/dist/aos.css'
import { animationProps } from '@/controllers/animations/animationProps'

export default function SocialMedia() {
	const [isDivVisible, setIsDivVisible] = useState<boolean>(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDivVisible(true)
			AOS.refresh()
		}, animationProps.socialMedia.Delay)
		return () => clearTimeout(timer)
	}, [])

	const socialMediaArray = [
		{ label: 'Linkedin', Icon: Linkedin, link: '' },
		{ label: 'Github', Icon: GitHub, link: '' },
		{ label: 'Email', Icon: Email, link: '' },
	]

	return (
		<div className={`mr-4 absolute right-0 ${isDivVisible ? 'opacity-100' : 'opacity-0'}`}>
			{isDivVisible &&
				socialMediaArray.map((item, index) => (
					<a
						href={item.link}
						key={item.label}
						data-aos={animationProps.socialMedia.Animation}
						data-aos-delay={index * 100}
						data-aos-duration={animationProps.socialMedia.Duration}
						data-aos-easing={animationProps.socialMedia.easing}
					>
						<img
							src={item.Icon}
							title={item.label}
							alt={item.label}
							className="size-10 transition ease-in hover:scale-115 mb-3"
						/>
					</a>
				))}
		</div>
	)
}
