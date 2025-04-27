import React from 'react'

function ContactList({ contacts }) {
  return (
    <div>
    
    <h1>Contact List</h1>
    <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {index + 1}. {contact.userName} - {contact.email}
            <button>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default ContactList