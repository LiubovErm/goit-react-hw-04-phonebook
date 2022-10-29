import { useState, useEffect} from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix';
import initialContacts from '../components/List/initialContacts.json'

export function App () {
  const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = ({ name, number }) => {
     const newContact = {
      id: nanoid(),
      name,
      number,
    }
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [newContact, ...prevContacts])
  };


  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };


  const filterContact = (event) => {
    setFilter(event.currentTarget.value);
  };


  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
 
  const visibleContact = getVisibleContact();

    return (
      <Box mx='auto' maxWidth={500} >
        <h2>Phonebook</h2>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={filterContact} value={filter} />
        <List contacts={visibleContact}
          onDeleteContact={deleteContact}/>
      </Box>
    );
}











// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
