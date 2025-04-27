//import logo from './logo.svg';
//import Form from './Form';
import Form from './Form';
import ContactList from './ContactList';
import './App.css';
import { useState } from 'react';


function App() {
    const [contacts,setContacts] = useState([]);

    function addContact(newContact)
    {
        setContacts([...contacts,newContact]);
    }
  return (
    <div>
    <Form addContact={addContact}/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
