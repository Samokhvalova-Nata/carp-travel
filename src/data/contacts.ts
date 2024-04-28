import { IContactsFormData } from "@/types/formTypes";

export const contactsInfo = {
    phone: {
      title: "Phone number",
      numbers: ["+38 (098) 12 34 567", "+38 (073) 12 34 567"]
    },
    email: {
      title: "E-mail",
      email: "support@carptravel.com"
    },
    socialMedia: {
      title: "Follow us",
      items: [
        {
          title: "facebook",
          href: "https://www.facebook.com/",
          ariaLabel: "Facebook link",
        },
        {
          title: "instagram",
          href: "https://www.instagram.com/",
          ariaLabel: "Instagram link",
        },
        {
          title: "youtube",
          href: "https://www.youtube.com/",
          ariaLabel: "Youtube link",
        },
        {
          title: "tiktok",
          href: "https://www.tiktok.com/",
          ariaLabel: "Ttiktok link",
        }
      ]
    },
};

export const contactsFormData:IContactsFormData = {
    forma: {
    inputs: [
      {
        id: "contacts-name",
        field: "name",
        name: "name",
        type: "text",
        required: true,
        label: "Full name",
        placeholder: "John Smith",
        error: "Incorrect name",
        ariaLabel: "Full name input",
        pattern: /^[A-Za-zА-Яа-яЁё\s']+$/
      },
      {
        id: "contacts-email",
        field: "email",
        name: "email",
        type: "email",
        required: true,
        label: "E-mail",
        placeholder: "johnsmith@email.com",
        error: "Incorrect e-mail",
        ariaLabel: "E-mail input",
        pattern: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/ 
      }
    ],
    textarea: {
      id: "contacts-message",
      name: "message",
      field: "message",
      label: "Message",
      ariaLabel: "Message textarea"
    },
  },
};