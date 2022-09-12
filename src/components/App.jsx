import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm';
import ContactList from './ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.filter(contact => ContactList.id !== contactId),
    }))
  }

  addContacts = (data) => {
    console.log(data);

    const {name, number} = data;

    const namesArray = this.state.contacts.map(contact => contact.name);

    console.log(namesArray);

    if (namesArray.includes(name)) {
      alert("{name} is already in contacts");
    }
    else {
      const contacts = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [contacts, ...prevState.contacts],
      }))
    }
  }


  render () {
    return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContacts}/>

      <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
     
    </>
    );
  }
};
