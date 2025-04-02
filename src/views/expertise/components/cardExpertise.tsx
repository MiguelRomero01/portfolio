//assets

//models
import { cardExpertiseProps } from '@/controllers/components/cards/cardExpertise';

const CardExpertise: React.FC<cardExpertiseProps> = ({ icon, text, title }) => {
	return (
		<div className="bg-[#101010] rounded-3xl p-6 lg:py-10 lg:px-7 border-2 border-gray-600/35 hover:bg-[#1b1b1b] transition-colors hover:border-blue-400/50">
			<div className="p-2.5 border-blue-500/30 bg-blue-500/10 text-blue-400 size-11.5 rounded-xl mb-3">
				{icon}
			</div>

			<div className="text-white">
				<h1 className="text-[1.6rem] font-medium mb-2">{title}</h1>
				<div className="flex text-gray-400 text-[1.1rem]">
					<span>{text}</span>
				</div>
			</div>
		</div>
	);
};

export default CardExpertise;
