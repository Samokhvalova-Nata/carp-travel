import Title from '@/components/ui-kit/Title';
import ContactsInfo from '@/components/Contacts/ContactsInfo';
import ContactsForm from '@/components/Contacts/ContactsForm';

import title from '@/data/titles.json';

const Contacts = () => {
  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <Title text1={title.contacts1} text2={title.contacts2} />
        <div className="lg:flex lg:items-baseline lg:justify-between">
          <ContactsInfo />
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
