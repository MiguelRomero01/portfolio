import { useState } from 'react';

//components
import ContactInput from './components/input';
import { SubmitButton } from '@/components/SubmitButton';

//configs
import { FormDataType, personalInfo, affairInfo } from '@/config/formConfig';

//styles
import fontStyle from '@assets/fonts.module.css';
import SocialMedia from './components/socialMedia';

export default function ContactView() {
	const initialFormState: FormDataType = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const [formData, setFormData] = useState<FormDataType>(initialFormState);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setIsSubmitted(true);
		setTimeout(() => setIsSubmitted(false), 3000);
		setFormData(initialFormState);
	};

	return (
		<div className="rounded-4xl lg:mx-60 bg-[#e1e1e1]">
			<header className="text-center bg-gradient-to-r from-[#6366F1] to-[#8450fd]  rounded-t-4xl text-white pt-6 pb-20">
				<h1 className="lg:text-[2.5rem] font-bold pb-3" id={fontStyle.MainTitle}>
					Let's contact us
				</h1>
				<p className="lg:text-[1.2rem] lg:px-50 text-gray-200/85">
					I'm waiting for your messange! Complete this form and I'll answer as soon as possible
				</p>
			</header>

			{/*User Form*/}
			<form onSubmit={handleSubmit} className="lg:px-15 py-10 bg-white -mt-15 lg:mx-3 rounded-3xl">
				{/*Peronsal Information: email and name*/}
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
					{personalInfo.map((input, index) => (
						<>
							<ContactInput
								handleChange={handleChange}
								id={input.id}
								name={input.name}
								placeholder={input.placeholder}
								required={input.required}
								type={input.type}
								key={index}
								value={formData[input.name as keyof FormDataType] as keyof FormDataType}
							/>
						</>
					))}
				</div>

				{/*Subject and message*/}
				<div className="mt-8">
					{affairInfo.map((input, index) => (
						<div className="mb-5">
							<ContactInput
								handleChange={handleChange}
								id={input.id}
								name={input.name}
								placeholder={input.placeholder}
								required={input.required}
								type={input.type}
								key={index}
								value={formData[input.name as keyof FormDataType] as keyof FormDataType}
							/>
						</div>
					))}
				</div>

				<div>
					<SubmitButton isSubmitted={isSubmitted} />
				</div>
			</form>

			<footer className="pt-4 pb-6 flex lg:px-10">
				<p className="text-gray-600 text-[1.1rem]">© 2025 Miguel Romero | Portfolio</p>
				<div className="justify-end ml-auto ">
					<SocialMedia />
				</div>
			</footer>
		</div>
	);
}
