import React from 'react';

export const TextInput = ({ value, onChange }) =>
  <input
    className="text-input"
    type="text"
    value={value}
    onChange={onChange}
  />
