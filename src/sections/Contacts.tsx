import React from 'react'
import Title from "@/components/ui-kit/Title";
import title from '@/data/titles.json';



const Contacts = () => {
  return (
    <section id="contacts" className='contacts section'>
      <div className='container'>
        <Title text1={title.contacts1} text2={title.contacts2}/>
      </div>
    </section>
  )
}

export default Contacts
