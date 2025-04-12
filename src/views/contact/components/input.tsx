import { ContactInputProps } from "@/controllers/components/contactInputProps";

const ContactInput:React.FC<ContactInputProps> = ({value, handleChange, id, name, placeholder, required, type,}) => {
      return(
            <>
            	{name !== 'message'? (
				<div>
					<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{name}
					</label>
					<input
						type={type}
						id={id}
						name={name}
						value={value}
						onChange={handleChange}
						required={required}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 px-3 py-2"
						placeholder={placeholder}
					/>
				</div>
			): (
				<div>
					<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{name}
					</label>
					<textarea
						id={id}
						name={name}
						value={value}
						onChange={handleChange}
						required={required}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 px-3 py-2 h-[20vh]"
						placeholder={placeholder}
					/>
				</div>
			)}
            </>
      )
}

export default ContactInput;