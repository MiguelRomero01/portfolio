import { CheckCircle, Send } from "lucide-react";

interface SubmitButtonProps {
    isSubmitted: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitted }) => (
	<button
		type="submit"
		className="w-full flex justify-center items-center gap-2 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#585bff] to-[#844fff]  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 cursor-pointer"
	>
		{isSubmitted ? (
			<>
				<CheckCircle />
				Your Message Was Sent!
			</>
		) : (
			<>
				<Send />
				Send Message
			</>
		)}
	</button>
);