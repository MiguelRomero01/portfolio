import { TrackerProps } from '@/controllers/visuals/contentTracker';

const ContentTracker: React.FC<TrackerProps> = ({ quantity, text, color }) => {
	return (
		<div>
			<h2 className="text-[2rem] font-bold" style={{ color: color }}>
				{quantity}+
			</h2>
			<h3 className="text-white font-semibold">{text}</h3>
		</div>
	);
};

export default ContentTracker;
