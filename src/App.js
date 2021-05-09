import React, {Component} from 'react';
import shortid from 'short-id';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

componentDidMount() {
  const contacts =localStorage.getItem('contacts');
  const parsedContacts =JSON.parse(contacts);

  if (parsedContacts) {
    this.setState({ contacts: parsedContacts});
  }
}

componentDidUpdate(prevProps, prevState) {
  const nextContacts = this.state.contacts;
  const prevContacts = prevState.contacts;
  
  if(nextContacts !== prevContacts) {
    localStorage.setItem('contacts', JSON.stringify(nextContacts));
  }
}


  addContact = ({ name, number }) => {

    this.setState(prevState => {
        const { contacts } = prevState;
        const result = contacts.find(contact => {
            return (contact.name === name || contact.number === number)
        });
        if (result) {
            alert(`${name} is already in contacts`);
            return {
                contacts
            }
        }
        const contact = {
            id: shortid.generate(),
            name,
            number,
        }
        return {
            contacts: [...prevState.contacts, contact]
        }
    });
}

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
        return contacts;
    }
    const filteredContacts = contacts.filter(({ name }) => name.includes(filter))
    return filteredContacts;
}

  deleteContact = id => {
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };



  render () {

    const {filter} = this.state;
    const getFilterContacts = this.getFilterContacts();

    return (
      <div className={styles.App}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts ={getFilterContacts}
        onDeleteContact ={this.deleteContact}/>
      </div>
    );
  }
  
}

export default App;