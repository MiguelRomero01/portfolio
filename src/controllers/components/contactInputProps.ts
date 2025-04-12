export interface ContactInputProps {
      value: string,
      handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
      type: string,
      id: string,
      name: string,
      required: boolean,
      placeholder: string,
}
