//assets
import { CheckCircle2, CircleAlert } from 'lucide-react';

//models
import { CardEducationProps } from '@/controllers/visuals/educationCard';

const CardEducation: React.FC<CardEducationProps> = ({
	title,
	available,
	issuer,
	date,
	link,
	icon,
}) => {
	return (
		<div className="bg-[#101010] rounded-3xl p-6 lg:p-10">
			<div className="p-3 border-blue-500/30 bg-blue-500/10 text-blue-400 size-12 rounded-xl">
				{icon}
			</div>

			<div className="text-white">
				<h1 className="text-[1rem] font-bold">{title}</h1>
				<h3 className="text-[0.8rem]">{issuer}</h3>
				<div className="flex">
					{available ? (
						<>
							<CheckCircle2 className="text-green-400 pr-2 size-7" />
							<span>verified</span>
							<span className="ml-auto">{date}</span>
						</>
					) : (
						<>
							<CircleAlert className="text-amber-500 pr-2" />
							<span>In process</span>
							<span className="ml-auto">{date}</span>
						</>
					)}
				</div>
				<hr />
				{available ? <span>Url: {link}</span> : <span>Url: No available</span>}
			</div>
		</div>
	);
};

export default CardEducation;
