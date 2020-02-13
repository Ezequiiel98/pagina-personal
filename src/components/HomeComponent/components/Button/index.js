import React from 'react';

function Button({ onClick, value, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {value}
    </button>
  );
}

export default Button;
