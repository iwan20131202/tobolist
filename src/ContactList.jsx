import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul style={{ listStyle: 'none', padding: '0' }}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '5px', borderBottom: '1px dotted #ccc' }}>
        <span>{name}: {number}</span>
        <button 
          type="button" 
          onClick={() => onDeleteContact(id)}
          style={{ marginLeft: '10px', padding: '2px 8px', borderRadius: '4px', border: '1px solid #ff4d4d', color: '#ff4d4d', cursor: 'pointer', background: 'none' }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;