import React from 'react';

function Proyect({ urlImg, title, description, onClick }) {
  const handleClick = () => onClick(false);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={urlImg} />
      <button type="button" onClick={handleClick}>
        Close proyect
      </button>
    </div>
  );
}

export default Proyect;
