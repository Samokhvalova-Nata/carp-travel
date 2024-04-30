import React from 'react';

import { contactsInfo } from '@/data/contacts';

const ContactsInfo = () => {
  const { phone, email, socialMedia } = contactsInfo;

  return (
    <address className="mb-[12px] mt-[36px] flex w-full flex-col items-end gap-[24px] not-italic md:relative md:flex-row md:items-baseline md:gap-[60px] md:pl-[34px] lg:flex-col lg:gap-[64px]">
      <div className="flex items-baseline gap-[20px] md:w-[50%] md:pl-[31px] lg:w-full">
        <ul>
          {phone.items.map(({ number, ariaLabel }) => (
            <li key={number}>
              <a
                href={`tel:${number}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="contact-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
        <p className="contact-paragrath">{phone.title}</p>
      </div>

      <div className="mr-[46px] flex items-baseline gap-[20px] md:absolute md:bottom-0 md:order-1 md:w-[50%] lg:static lg:order-none lg:w-full">
        <a
          href={`mailto:${email.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={email.ariaLabel}
          className="contact-link"
        >
          {email.email}
        </a>
        <p className="contact-paragrath">{email.title}</p>
      </div>

      <div className="mr-[15px] flex items-baseline gap-[20px] lg:mt-[60px] lg:flex-row-reverse lg:justify-end">
        <p className="contact-paragrath">{socialMedia.title}</p>
        <ul className="lg:ml-[115px] lg:text-right">
          {socialMedia.items.map(({ title, href, ariaLabel }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="contact-link"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </address>
  );
};

export default ContactsInfo;
