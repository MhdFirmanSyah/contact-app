import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };

    this.onDelete = this.onDelete.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  onDelete(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  addContact({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          { 
            id: +new Date(),
            name,
            tag,
            imageUrl: "/public/images/arifaizin.jpeg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Tambah Kontak</h1>
        <ContactInput addContact={this.addContact} />
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default ContactApp;
