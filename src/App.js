import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const isDuplicate = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontFamily: "Arial",
        }}
      >
        <h1>PhoneStation</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
