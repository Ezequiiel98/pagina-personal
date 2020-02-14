import React from 'react';

import styles from './index.module.scss';

function NavBar() {
  let handleClick = (event)=>{
    event.preventDefault()
    document.querySelector('#nav').classList.add(styles.navBarActive)
  }
  return (
    <div className={styles.containerNav}>
      <div className={styles.containterBurger}>
        <a href="google.com" className={styles.burgerMenu} onClick={handleClick}>
          <span className={styles.burgerSpan}></span>
          <span className={styles.burgerSpan}></span>
          <span className={styles.burgerSpan}></span>
        </a>
      </div>
      <nav id="nav" className={styles.navBar}>
        <ul className={styles.containerItems}>
          <li className={styles.navItem}>
            <a className={styles.itemLink} href="google.com" >
              Inicio
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.itemLink} href="google.com">
              Sobre Mi
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.itemLink} href="google.com">
              Portafolio
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.itemLink} href="google.com">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
