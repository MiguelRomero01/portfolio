//SVGs
import Linkedin from '@assets/svg/socialMedia/linkedin.svg'
import GitHub from '@assets/svg/socialMedia/github.svg'
import Email from '@assets/svg/socialMedia/email.svg'
import Whatsapp from '@assets/svg/socialMedia/whatsapp.svg'

export default function SocialMedia() {

	const socialMediaArray = [
		{ label: 'Github', Icon: GitHub, link: 'https://github.com/MiguelRomero01' },
		{ label: 'Email', Icon: Email, link: 'mailto:mr9501459@gmail.com' },
		{
			label: 'Linkedin',
			Icon: Linkedin,
			link: 'https://www.linkedin.com/in/miguel-romero-2505051a8',
		},
		{ label: 'Whatsapp', Icon: Whatsapp, link: 'https://wa.me/573044591882' },
	];

	return (
		<div className="flex gap-8">
			{socialMediaArray.map((item, index) => (
				<a href={item.link} target="_blank" key={index}>
					<img
						src={item.Icon}
						title={item.label}
						alt={item.label}
						className="size-5 hover:size-5.5 transition-all ease-in duration-100"
					/>
				</a>
			))}
		</div>
	);
}
