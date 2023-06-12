import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    contacts: [],
  };

  export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: (state, { payload }) => {
        state.contacts.push(payload);
      },
      deleteContacts: (state, { payload }) => {
        state.contacts = state.contacts.filter(item => item.id !== payload);
      },
     
    },
  });
  
  export const { addContacts, deleteContacts } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;


  //Selector

  export const getContacts =(state) => state.contacts.contacts