export const personalInfo = [
	{
		id: 'name',
		name: 'Name',
		type: 'text',
		placeholder: 'Your Name',
		required: true,
	},
	{
		id: 'email',
		name: 'E-mail',
		type: 'email',
		placeholder: 'Example@gmail.com',
		required: true,
	},
] as const;

export const affairInfo = [
	{
		id: 'subject',
		name: 'Subject',
		type: 'text',
		placeholder: "What's the topic of your message?",
		required: true,
	},
	{
		id: 'message',
		name: 'Message',
		type: 'text',
		placeholder: 'Tell me more details',
		required: true,
	},
] as const;

export type FormDataType = {
    name: string;
    email: string;
    subject: string;
    message: string;
};