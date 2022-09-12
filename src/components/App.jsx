import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const compareContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    compareContact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilteredContacts = () => {
    const {contacts, filter} = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),);
  }


  render () {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContacts}/>
      <h2>Contacts</h2>

      <Filter value={filter} onChange={this.changeFilter}/>

      <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
     
    </>
    );
  }
};
