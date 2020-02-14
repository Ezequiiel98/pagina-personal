import React from 'react';

import styles from './index.module.scss';

function NavBar() {
  let i = true;

  let handleClick = (event)=>{
    event.preventDefault()
    if (i) {
      document.querySelector('#nav').style = ' height: 100%; width: 100%';
      i = !i
    } else { 
      document.querySelector('#nav').style = ' height: 0; width: 0';

      i = !i
    }
  }

  let resizeW = () =>{
    if(window.innerWidth >= 768){
      document.querySelector('#nav').style = ' height: auto; width: auto';
    }
  }
  window.onresize = resizeW

  return (
    <div className={styles.containerNav}>
      <div className={styles.containterBurger}>
        <a href="#" className={styles.burgerMenu} onClick={handleClick}>
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
