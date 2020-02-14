import React from 'react';

import styles from './index.module.scss';

function BurgerMenu({ onClick }) {
  return (
    <div className={styles.containterBurger}>
      <a href="#" className={styles.burgerMenu} onClick={onClick}>
        <span className={styles.burgerSpan} />
        <span className={styles.burgerSpan} />
        <span className={styles.burgerSpan} />
      </a>
    </div>
  );
}

export default BurgerMenu;
