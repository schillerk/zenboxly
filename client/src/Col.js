import React from 'react';

export const Col = ({ children, size }) => {
  const width = `${100 * size / 12}%`;
  return (
    <div style={{ width: width }}>
      {children}
    </div>
  );
}
