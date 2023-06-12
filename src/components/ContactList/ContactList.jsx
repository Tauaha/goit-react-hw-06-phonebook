import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';

import {  deleteContacts, getContacts } from 'redux/contactSlice';
import { getFilterContacts } from 'redux/filterSlice';
const ContactList =()=>{
const contacts = useSelector(getContacts)
const filter = useSelector(getFilterContacts)
const dispatch = useDispatch()

    const filterContact=()=>{
     const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
          ) }

          const visibleContact = filterContact();
        
return(
    <>
      {visibleContact.length > 0 &&
       (
         <ul className={styles.list}>
        {visibleContact.map(({id, name, number}) => (<li key={id} className={styles.item}>
       {name}:<span>{number}</span> 
       <button onClick={()=> dispatch(deleteContacts(id))} className={styles.button}>Delete</button>
        </li> )) }
    </ul>
    )}
    
    </>
  
)
}

ContactList.propTypes ={
     visibleContact: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func.isRequired,
}
export default ContactList