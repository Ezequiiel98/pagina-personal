import React from 'react';
import styles from './index.module.scss';
import Titulo from '../ButtonNav';

function ButtonNav({ contentButton }){
    return (
      <li className={styles.navItem}> 
            <a className={styles.itemLink} href="#" >
              {contentButton}
            </a>
        </li>
    );
}

export default ButtonNav;
