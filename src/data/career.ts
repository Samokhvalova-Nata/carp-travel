import {IFormData} from "../types/formTypes";

export const features = {
  subtitle: "Why us ?",
  description: "Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission. ",
  items: [
    {
      id: "1",
      title: "Professional development",
      description: "We offer growth opportunities and a creative environment to nurture your talents."
    },
    {
      id: "2",
      title: "Teamwork",
      description: "Join our close-knit family, where support and inspiration abound."
    },
    {
      id: "3",
      title: "Stimulating work environment",
      description: "Flexibility and remote options for a comfortable experience."
    },
    {
      id: "4",
      title: "Exciting challenges",
      description: "Unleash your potential through unforgettable projects showcasing Carpathian beauty."
    },
  ],
};

export const formData: IFormData = {
  description: "Don't miss your opportunity! Fill out the form right now and join our team!",
  forma: {
    inputs: [
      {
        id: "career-name",
        field: "name",
        name: "name",
        type: "text",
        required: true,
        label: "Full name",
        placeholder: "John Smith",
        error: "Incorrect name",
        ariaLabel: "Full name input"
      },
      {
        id: "career-email",
        field: "email",
        name: "email",
        type: "email",
        required: true,
        label: "E-mail",
        placeholder: "johnsmith@email.com",
        error: "Incorrect e-mail",
        ariaLabel: "E-mail input",
        pattern: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/ 
      },
      {
        id: "career-position",
        field: "position",
        name: "position",
        type: "text",
        required: true,
        label: "Position",
        placeholder: "Movie maker",
        error: "Incorrect phone",
        ariaLabel: "Position input"
      },
      {
        id: "career-phone",
        field: "phone",
        name: "phone",
        type: "tel",
        required: true,
        label: "Phone",
        placeholder: "+ 38 (097) 12 34 567",
        error: "",
        ariaLabel: "Phone number input",
        pattern: /^\+?3?8?(0\d{9})$/ 
      }
    ],
    textarea: {
      id: "career-message",
      name: "message",
      field: "message",
      label: "Message",
      ariaLabel: "Message textarea"
    },
    check: {
      id: "career-policy",
      name: "policy",
      field: "policy",
      type: "checkbox",
      required: true,
      error: "Check is pequired",
      ariaLabel: "Policy checkbox",
      text: "I confirm my consent to the processing of personal data."
    },
  },
};