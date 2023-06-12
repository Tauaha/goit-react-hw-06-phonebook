import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/filterSlice';
import { setFilter } from 'redux/filterSlice';

const ContactFilter =()=> {
   const {filter} = useSelector(getFilterContacts)
    const dispatch = useDispatch()
      const changeFilter = e => {
    dispatch(setFilter(e.target.value))
  };
return(
    <>
    <h3>Find contacts by name</h3>
    <input type="text" value={filter}  onChange={changeFilter} />

    </>
)
}

ContactFilter.propTypes = {
 value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,  ]),
 onChange: PropTypes.func.isRequired    
       
}
export default ContactFilter