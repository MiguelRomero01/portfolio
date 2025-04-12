import { ContactInputProps } from "@/controllers/components/contactInputProps";

const ContactInput:React.FC<ContactInputProps> = ({value, handleChange, id, name, placeholder, required, type,}) => {
      return (
				<>
					{id !== 'message' ? (
						<div>
							<label
								htmlFor={name}
								className="block text-[1rem] font-medium text-gray-700 after:content-['*']"
							>
								{name}
							</label>
							<input
								type={type}
								id={id}
								name={name}
								value={value}
								onChange={handleChange}
								required={required}
								className="mt-1 block w-full rounded-md border-gray-300/90 bg-gray-400/15 border-2 px-3 py-2.5"
								placeholder={placeholder}
							/>
						</div>
					) : (
						<div>
							<label
								htmlFor={name}
								className="block text-[1rem] font-medium text-gray-700 after:content-['*']"
							>
								{name}
							</label>
							<textarea
								id={id}
								name={name}
								value={value}
								onChange={handleChange}
								required={required}
								className="mt-1 block w-full rounded-md border-gray-300/90 bg-gray-400/15 border-2 px-3 py-2.5 h-[20vh]"
								placeholder={placeholder}
							/>
						</div>
					)}
				</>
			);
}

export default ContactInput;