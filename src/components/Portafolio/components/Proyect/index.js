import React from 'react';

import styles from './index.module.scss';

function Proyect({ urlImg, title, description, onClick }) {
  const handleClick = () => onClick(false);

  return (
    <div className={styles.proyect}>
      <div className={styles.containter}>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.img} src={urlImg} />
        <div className={styles.description}>
          <p>{description}</p>
          <button className={`${styles.btnProyect} ${styles.btn}`} type="button">
            Ver Proyecto
          </button>
        </div>
        <button className={`${styles.btnClose} ${styles.btn}`} type="button" onClick={handleClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default Proyect;
