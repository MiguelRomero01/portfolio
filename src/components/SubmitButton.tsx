import { CheckCircle, Send } from "lucide-react";

interface SubmitButtonProps {
    isSubmitted: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitted }) => (
    <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
    >
        {isSubmitted ? (
            <>
                <CheckCircle className="h-5 w-5" />
                Sent!
            </>
        ) : (
            <>
                <Send className="h-5 w-5" />
                Send Message
            </>
        )}
    </button>
);