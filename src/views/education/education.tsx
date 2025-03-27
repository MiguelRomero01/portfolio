//assets
import { Award, School } from 'lucide-react';
//components
import CardEducation from './components/card';

export default function EducationView() {
	return (
		<div className="">
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mx-5 lg:mx-30">
				<CardEducation
					icon={<School />}
					available={true}
					date="20/12/1"
					issuer="das"
					link="dsafsa"
					text="sda"
					title="sfasd"
				/>

				<CardEducation
					icon={<Award />}
					available={false}
					date="20/12/1"
					issuer="das"
					link="dsafsa"
					text="sda"
					title="sfasd"
				/>
			</section>
		</div>
	);
}
