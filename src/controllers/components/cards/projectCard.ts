interface CardBaseProps {
	imageURL: string | undefined;
	title: string | undefined;
	date: string | undefined;
	mainText?: string;
	techsUsed_Icons?: string[];
}

interface DialogWindowProps {
	closeDialog?: () => void;
	fullText: string | undefined;
	techsUsed_Text: string[] | undefined;
	linkGit: string | undefined;
	linkProject?: string;
	buttonText?: string;
}

export interface ActionAreaCardProps extends CardBaseProps, DialogWindowProps {}
