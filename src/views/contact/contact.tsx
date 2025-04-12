import { useState } from 'react';

//components
import ContactInput from './components/input';
import { SubmitButton } from '@/components/SubmitButton';

//configs
import { FormDataType, personalInfo, affairInfo } from '@/config/formConfig';

//styles
import fontStyle from '@assets/fonts.module.css';

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
		<div className="rounded-4xl bg-white mx-20">
			<header className="text-center bg-violet-600 rounded-t-4xl text-white pt-6 pb-20">
				<h1 className="lg:text-[2.5rem] font-bold pb-3" id={fontStyle.MainTitle}>
					Let's contact us
				</h1>
				<p className="lg:text-[1.2rem] lg:px-90">
					I'm waiting for your messange! Complete this form and I'll answer as soon as possible
				</p>
			</header>
			<form onSubmit={handleSubmit} className="lg:px-15 py-10">
				{/*Peronsal Information: email and name*/}
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
					{personalInfo.map((input, index) => (
						<div>
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

				{/*Subject and message*/}
				<div className="mt-12">
					{affairInfo.map((input, index) => (
						<div className="mb-7">
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
		</div>
	);
}
