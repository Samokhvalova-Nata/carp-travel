import React from 'react'
import { contactsInfo } from '@/data/contacts';


const ContactsInfo = () => {
  const { phone, email, socialMedia } = contactsInfo;

  return (
    <address className='mt-[36px] flex flex-col gap-[24px] items-end w-full mb-[12px] 
    md:flex-row md:items-baseline md:relative md:pl-[34px] md:gap-0
    lg:flex-col lg:gap-16 not-italic'>

    <div className='flex gap-[20px] items-baseline md:w-[50%] md:pl-[31px] lg:w-full'>
      <ul className=''>
          {phone.numbers.map((item) => (
            <li key={item}>
              <a 
                href={`tel:${item}`}
                target="_blank"
                rel="noopener noreferrer"
                className='font-normal leading-[1.72] md:text-16 md:leading-[1.5] lg:text-18 lg:leading-[1.33] hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300'>
              {item}
              </a>
            </li>))}
      </ul>
      <p className='text-12 leading-[1.67] lg:leading-[2]'>
        {phone.title}
        </p>
    </div>

    <div className='flex gap-[20px] items-baseline mr-[46px] 
    md:order-1 md:w-[50%] md:absolute md:bottom-0 custom-left lg:order-none lg:static lg:w-full'>
      <a 
        href={`mailto:${email.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className='font-normal md:text-16 md:leading-[1.5] lg:text-18 lg:leading-[1.33] hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300'>
          {email.email}
      </a>
      <p className='text-12 leading-[1.67] lg:leading-[2]'>
        {email.title}
      </p>
    </div>

    <div className='flex gap-[20px] items-baseline mr-[15px] lg:flex-row-reverse lg:justify-end '>
        <p className='text-12 leading-[1.67] lg:leading-[2]'>
          {socialMedia.title}
        </p>
        <ul className='lg:ml-[115px] text-right'>
          {socialMedia.items.map(({ title, href, ariaLabel }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className='font-normal leading-[1.72] md:text-16 md:leading-[1.5] lg:text-18 lg:leading-[1.33] hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300'>
                {title}
              </a>
            </li>
      ))}
        </ul>
    </div>  

    </address>
  )
}

export default ContactsInfo

// className='mt-[36px] mb-[12px] flex flex-col gap-[24px] items-end not-italic'