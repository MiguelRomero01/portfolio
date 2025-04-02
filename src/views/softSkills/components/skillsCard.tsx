import { SoftSkills_CardProps } from '@/controllers/components/cards/softSkillCard';

const SkillCard: React.FC<SoftSkills_CardProps> = ({ icon, percent, text, title }) => {
	const clampedValue = Math.min(Math.max(percent, 0), 100); //bar percent formula

	return (
		<div className="bg-[#101010] rounded-3xl p-6 lg:py-10 lg:px-7 border-2 border-gray-600/35 hover:bg-[#1b1b1b] transition-colors hover:border-blue-400/50">
			<div className="p-2.5 border-blue-500/30 bg-purple-600/10 text-purple-400 size-11.5 rounded-xl mb-5">
				{icon}
			</div>

			<div>
				<h2 className="text-white font-bold mb-3 text-[1.3rem]">{title}</h2>
				<span className="text-gray-400">{text}</span>
			</div>

			<div className="flex items-center gap-2 mt-5">
				<div className="w-full bg-[#42424291] rounded-full h-3 overflow-hidden flex">
					<div
						className="bg-gradient-to-r to-purple-600/70 from-blue-600/90 h-full transition-all duration-300"
						style={{ width: `${clampedValue}%` }}
					></div>
				</div>
				<span className="text-white text-[0.9rem]">{percent}%</span>
			</div>
		</div>
	);
};

export default SkillCard;
