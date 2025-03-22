import Linkedin from '@assets/svg/socialMedia/linkedin.svg'
import GitHub from '@assets/svg/socialMedia/github.svg'
import Email from '@assets/svg/socialMedia/email.svg'

export default function SocialMedia() {
	const socialMediaArray = [
		{ label: 'Linkedin', Icon: Linkedin, link: '' },
		{ label: 'Github', Icon: GitHub, link: '' },
		{ label: 'Email', Icon: Email, link: '' },
	]

	return (
		<div className="flex gap-5 justify-center mt-4">
			{socialMediaArray.map((item) => (
				<a href={item.link}>
					<img
						src={item.Icon}
						title={item.label}
						alt={item.label}
						className="size-12 transition ease-in hover:scale-105"
					/>
				</a>
			))}
		</div>
	)
}
