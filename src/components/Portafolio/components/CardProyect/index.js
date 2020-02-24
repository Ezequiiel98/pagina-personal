import React from 'react';

import styles from './index.module.scss';

function CardProyect({ urlImg, onClick, title, indexSelected, details }) {
  const handleClick = () => onClick(true, indexSelected);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{details}</p>
      <img src={urlImg} className={styles.img} />
      <button type="button" className={styles.btn} onClick={handleClick}>
        Ver mas
      </button> 
    </div>
  );
}

export default CardProyect;
