import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const inputStyle = {
      display: 'block',
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box'
    };

    return (
      <form onSubmit={this.handleSubmit} style={{ border: '1px solid #000', padding: '15px', borderRadius: '8px' }}>
        <label style={{ fontWeight: 'bold' }}>
          Name
          <input
            style={inputStyle}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <label style={{ fontWeight: 'bold' }}>
          Number
          <input
            style={inputStyle}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;