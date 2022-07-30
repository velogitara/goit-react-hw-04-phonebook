import Form from '../Form';
import Contacts from '../Contacts';
import { Section } from './App.styled';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

function App() {
  // const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  ///===================================================================??????????????????????????????????????????
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     console.log('1 раз');
  //     setContacts(parsedContacts);
  //   }
  // }, []);
  ///===================================================================??????????????????????????????????????????

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.find(i => i.name.toLowerCase() === data.name.toLowerCase())
      ? Notiflix.Notify.failure('That name already in the list', {
          position: 'center-center',
        })
      : setContacts([data, ...contacts]);
    // console.log(data);
  };
  const filterHandler = e => {
    // console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const onDeleteContactHandler = id => {
    setContacts(contacts.filter(i => i.id !== id));
  };

  return (
    <Section>
      <Form onSubmit={formSubmitHandler} />
      <Contacts
        contacts={contacts}
        filterValue={filter}
        filterHandler={filterHandler}
        onDelete={onDeleteContactHandler}
      />
    </Section>
  );
}

export default App;
