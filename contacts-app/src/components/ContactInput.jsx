import React from "react";
import { getData } from "../utils/data";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };

    this.addNameContact = this.addNameContact.bind(this);
    this.addTagContact = this.addTagContact.bind(this);
    this.submitNewContact = this.submitNewContact.bind(this);
  }

  addNameContact(event) {
    this.setState(() => {
      return { name: event.target.value };
    });
  }

  addTagContact(event) {
    this.setState(() => {
      return { tag: event.target.value };
    });
  }

  submitNewContact(event) { 
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.submitNewContact}>
        <input type="text" placeholder="Nama" onChange={this.addNameContact} />
        <input type="text" placeholder="Tag" onChange={this.addTagContact} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
