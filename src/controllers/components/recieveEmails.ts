import emailjs from '@emailjs/browser';
import { RefObject } from 'react';

const recieveEmails = async (
  form: RefObject<HTMLFormElement | null>,
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (form.current) {
      emailjs.sendForm(
            'service_zqpcy3u',
            'template_pk83hil',
            form.current,
            '_cKKf5HPk7_hgnLN3'
          ).then(() => {
            setIsSubmitted(true);
          }, (error) => {
            setIsSubmitted(false);
            console.error("Error al enviar correo:", error.text);
          }); 
  }
};

export default recieveEmails;
