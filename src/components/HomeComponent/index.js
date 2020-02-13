import React from 'react';

import Paragraph from '../Paragraph';

import Button from './components/Button';
import styles from './index.module.scss';

function HomeComponent() {
  const handleClick = () => {
    console.log('hola');
  };

  return (
    <div className={styles.container}> 
      <Paragraph text="Hi from home" />
      <Button value="button" onClick={handleClick} />
    </div>
  );
}

export default HomeComponent;
