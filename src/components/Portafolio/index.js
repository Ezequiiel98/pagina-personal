import React from 'react';

import proyects from './constants/proyects';
import CardProyect  from './components/CardProyect';
import styles from './index.module.scss'

class Portafolio extends React.Component{
    state = {
        id: 0,
        isVisible: false
    };


    render(){
        return (
            <div className={styles.protafolio} >
                {proyects.map(proyect => <CardProyect key={proyect.id} urlImg={proyect.urlImg} /> )}
            </div>
        )
    }
}

export default Portafolio;
