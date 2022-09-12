import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.filter(contact => ContactList.id !== contactId),
    }))
  }
  
  render () {
    return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>

      <ContactList/>
     
    </>
    );
  }
};
