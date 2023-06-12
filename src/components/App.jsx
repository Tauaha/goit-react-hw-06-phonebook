
import React from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './Filter/Filter';




export default function App () {
    
    return (<div style={{margin:"20px"}}>
       <h1>Phonebook</h1>
  <ContactsForm />
       <h2>Contacts</h2>
  <ContactFilter  />
  <ContactList/>
    </div>
    
   )}








