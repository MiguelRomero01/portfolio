//assets
import { CheckCircle2, CircleAlert } from 'lucide-react';

//models
import { CardEducationProps } from '@/controllers/components/cards/educationCard';

const CardEducation: React.FC<CardEducationProps> = ({
	title,
	available,
	issuer,
	date,
	link,
	icon,
}) => {
	return (
		<div className="bg-[#101010] rounded-3xl p-6 lg:py-10 lg:px-7 border-2 border-gray-600/35 hover:bg-[#1b1b1b] transition-colors hover:border-blue-400/50">
			<div className="p-2.5 border-blue-500/30 bg-blue-500/10 text-blue-400 size-11.5 rounded-xl">
				{icon}
			</div>

			<div className="text-white">
				<h1 className="text-[1.6rem] font-medium">{title}</h1>
				<h3 className="text-[1rem] my-3 text-gray-300">
					<i>{issuer}</i>
				</h3>
				<div className="flex text-gray-400">
					{available ? (
						<div className="flex justify-between w-full">
							<div className="items-center flex">
								<CheckCircle2 className="text-green-400 mr-2 size-5.5" />
								<span>Verified</span>
							</div>
							<span>{date}</span>
						</div>
					) : (
						<div className="flex justify-between w-full">
							<div className="items-center flex">
								<CircleAlert className="text-amber-500 mr-2 size-5.5" />
								<span>In process</span>
							</div>
							<span>{date}</span>
						</div>
					)}
				</div>
				<hr className="my-4 text-gray-300/30" />
				{available ? (
					<span className="text-gray-400">
						Certificate:
						<a href={link} className="underline pl-2 text-blue-400" target="_blank">
							View here
						</a>
					</span>
				) : (
					<span className="text-gray-400">
						Url: <i className="text-blue-400">No Available</i>
					</span>
				)}
			</div>
		</div>
	);
};

export default CardEducation;
