import React from 'react';

const Filter = ({ value, onChange }) => (
  <label style={{ display: 'block', marginBottom: '20px' }}>
    Find contacts by name
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
  </label>
);

export default Filter;