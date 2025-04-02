import { CheckCheck } from 'lucide-react';
import SkillCard from './components/skillsCard';
import SectionTitle from '../components/sectionTitle';

export default function SkillsView() {
	return (
		<div className="bg-white/5 py-20">
			<header className="flex flex-col text-center items-center mx-5 lg:mx-100">
				<SectionTitle text="Soft Skills" backgroundColor="#10a6eb28" color="#10a6ebc2" />
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-30 mt-20">
				<SkillCard icon={<CheckCheck />} percent={100} text="sdasdas" title="sdasdasd" />
				<SkillCard icon={<CheckCheck />} percent={30} text="sdasdas" title="sdasdasd" />
				<SkillCard icon={<CheckCheck />} percent={30} text="sdasdas" title="sdasdasd" />
			</div>
		</div>
	);
}
