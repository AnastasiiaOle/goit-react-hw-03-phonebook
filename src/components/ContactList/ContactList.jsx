import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';


const ContactList = ({ contacts, onDeleteContact }) => {
    return(
        <ul className={styles.ul}>
            {contacts.map(contact =>(
              <li  className={styles.li}key={contact.id}>
                  {contact.name}:{contact.number}
                  <button className={styles.button}
                  type ='button'
                  onClick= {()=> onDeleteContact(contact.id)}>
                      Delete
                  </button>
              </li>  
            ))}
        </ul>
    );

};

ContactList.propTypes = {
value: PropTypes.string,
contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        number: PropTypes.number,
    }),
),
onDeleteContact: PropTypes.func,
}

export default ContactList;