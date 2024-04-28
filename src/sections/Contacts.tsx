import React from 'react'
import Title from "@/components/ui-kit/Title";
import title from '@/data/titles.json';
// import {contactsInfo, contactsFormData} from '@/data/contacts';
import ContactsInfo from '@/components/Contacts/ContactsInfo';
import ContactsForm from '@/components/Contacts/ContactsForm';



const Contacts = () => {
  

  return (
    <section id="contacts" className='contacts section'>
      <div className='container'>
        <Title text1={title.contacts1} text2={title.contacts2} />
        <div className='lg:flex lg:items-baseline'>
          <ContactsInfo/>
          <ContactsForm/>
        </div>
        
      </div>
    </section>
  )
}

export default Contacts
