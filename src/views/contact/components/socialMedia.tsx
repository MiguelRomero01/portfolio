//SVGs
import Linkedin from '@assets/svg/socialMedia/linkedin.svg'
import GitHub from '@assets/svg/socialMedia/github.svg'
import Email from '@assets/svg/socialMedia/email.svg'
import Whatsapp from '@assets/svg/socialMedia/whatsapp.svg'

export default function SocialMedia() {

	const socialMediaArray = [
		{ label: 'Github', Icon: GitHub, link: '' },
		{ label: 'Email', Icon: Email, link: '' },
		{ label: 'Linkedin', Icon: Linkedin, link: '' },
		{ label: 'Whatsapp', Icon: Whatsapp, link: ''}
	]

	return (
		<div className='flex gap-8'>
			{socialMediaArray.map((item, index) => (
					<a
						href={item.link}
						key={index}
					>
						<img
							src={item.Icon}
							title={item.label}
							alt={item.label}
							className="size-5"
						/>
					</a>
				))}
		</div>
	)
}
