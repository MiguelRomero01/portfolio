export const personalInfo = [
      {
            id: 'name',
            name: 'name',
            type: 'text',
            placeholder: 'Name',
            label: 'Name',
            required: true,
      },
      {
            id: 'email',
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            required: true,
      },
]

export const affairInfo = [
      {
            id: 'subject',
            name: 'subject',
            type: 'text',
            placeholder: "What's the topic of your message?",
            label: 'Subject',
            required: true,
      },
      {
            id: 'message',
            name: 'message',
            type: 'text',
            placeholder: 'Tell me more details',
            label: 'Message',
            required: true,
      },
] as const;

export type FormDataType = {
    name: string;
    email: string;
    subject: string;
    message: string;
};