import CardExpertise from './components/cardExpertise';

export default function ExpertiseView() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-[8%] mt-20">
			<CardExpertise />
			<CardExpertise />
			<CardExpertise />
		</section>
	);
}
