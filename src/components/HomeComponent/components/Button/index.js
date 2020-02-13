import React from 'react';

function Button({ onClick, value }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
