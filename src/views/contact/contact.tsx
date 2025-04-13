import { useRef, useState } from 'react';

//components
import ContactInput from './components/input';
import { SubmitButton } from '@/components/SubmitButton';

//configs
import { FormDataType, personalInfo, affairInfo } from '@/config/formConfig';

//styles
import fontStyle from '@assets/fonts.module.css';
import SocialMedia from './components/socialMedia';
import recieveEmails from '@/config/recieveEmails';

export default function ContactView() {
	const form = useRef<HTMLFormElement>(null);

	const initialFormState: FormDataType = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const [formData, setFormData] = useState<FormDataType>(initialFormState);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		recieveEmails(form, setIsSubmitted);
		setIsLoading(true);
		setFormData(initialFormState);
	};

	return (
		<div className="rounded-4xl lg:mx-60 bg-[#e1e1e1] mx-3">
			<header className="text-center bg-gradient-to-r from-[#6366F1] to-[#8450fd]  rounded-t-4xl text-white pt-6 pb-20">
				<h1 className="lg:text-[2.5rem] font-bold pb-3 text-2xl" id={fontStyle.MainTitle}>
					Shall we get in touch?
				</h1>
				<p className="text-[0.9rem] lg:text-[1.2rem] px-5 lg:px-50 text-gray-200/85">
					I'm waiting for your message! Complete this form and I'll answer as soon as possible
				</p>
			</header>

			{/*User Form*/}
			<form
				ref={form}
				onSubmit={handleSubmit}
				className="px-5 lg:px-15 py-10 bg-white -mt-15 lg:mx-3 rounded-3xl"
			>
				{/*Peronsal Information: email and name*/}
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 ">
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
						<div className="mb-3 lg:mb-5">
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
					<SubmitButton isSubmitted={isSubmitted} isLoading={isLoading} />
				</div>
			</form>

			<footer className="pt-4 pb-6 md:flex px-10">
				<p className="text-gray-600 text-[0.8rem] lg:text-[1.1rem]">
					© 2025 Miguel Romero | Portfolio
				</p>
				<div className="md:justify-end md:ml-auto pt-2 ">
					<SocialMedia />
				</div>
			</footer>
		</div>
	);
}
