import Linkedin from '@assets/svg/socialMedia/linkedin.svg'
import GitHub from '@assets/svg/socialMedia/github.svg'
import Email from '@assets/svg/socialMedia/email.svg'

import 'aos/dist/aos.css'

export default function SocialMedia() {
	const socialMediaArray = [
		{ label: 'Linkedin', Icon: Linkedin, link: '' },
		{ label: 'Github', Icon: GitHub, link: '' },
		{ label: 'Email', Icon: Email, link: '' },
	]

	return (
		<div className="flex gap-5 justify-center mt-4" data-aos="fade-right">
			{socialMediaArray.map((item) => (
				<a href={item.link} key={item.label}>
					<div data-aos="flip-up">
						<img
							src={item.Icon}
							title={item.label}
							alt={item.label}
							className="size-12 transition ease-in hover:scale-105"
						/>
					</div>
				</a>
			))}
		</div>
	)
}
