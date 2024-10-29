import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => {
        return (
          <ContactItem onDelete={onDelete} key={contact.id} {...contact} />
        );
      })}
    </div> 
  );
};

export default ContactList;
