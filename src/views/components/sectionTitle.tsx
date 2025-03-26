import { sectionTitleProps } from '@/controllers/visuals/sectionTitle';

const SectionTitle: React.FC<sectionTitleProps> = ({ color, backgroundColor, text }) => {
	return (
		<div
			className="py-1 px-3 border-2 rounded-full w-fit text-center justify-center text-[1rem] font-bold"
			style={{ color: color, backgroundColor: `${backgroundColor}` }}
		>
			<span>{text}</span>
		</div>
	);
};
export default SectionTitle;
