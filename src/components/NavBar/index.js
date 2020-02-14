import React from 'react';

import nameMenus from './constants/nameMenu';
import ButtonNav from './components/ButtonNav';
import BurgerMenu from './components/BurgerMenu';
import styles from './index.module.scss';

function NavBar() {
  let i = true;

  let handleClick = (event)=>{
    event.preventDefault()
    if (i) {
      document.querySelector('#nav').style = ' height: 100%; width: 100%';
    } else { 
      document.querySelector('#nav').style = ' height: 0; width: 0';

    }
    i = !i
  }

  let resizeW = () =>{
    if(window.innerWidth >= 768){
      document.querySelector('#nav').style = ' height: auto; width: auto';
    }
  }
  window.onresize = resizeW;

  return (
    <div className={styles.containerNav}>
      <BurgerMenu onClick={handleClick} />
      <nav id="nav" className={styles.navBar}>
        <ul className={styles.containerItems}>
          {nameMenus.map(text => (
            <ButtonNav key={text.id} contentButton={text.name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
