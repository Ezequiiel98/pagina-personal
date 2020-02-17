import React from 'react';

import styles from './index.module.scss';

function ButtonNav({ contentButton }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.itemLink} href="/inicio">
        {contentButton}
      </a>
    </li>
  );
}

export default ButtonNav;
