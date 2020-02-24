import React from 'react';

import proyects from './constants/proyects';
import CardProyect from './components/CardProyect';
import styles from './index.module.scss';
import Proyect from './components/Proyect';

class Portafolio extends React.Component {
  state = {
    id: 0,
    openModal: false
  };

  openModal = (openModal, id) => this.setState({ openModal, id });

  closeModal = openModal => this.setState({ openModal });

  render() {
    return (
      <div className={styles.portafolio}>
        {proyects.map(proyect => (
          <CardProyect
            key={proyect.id}
            indexSelected={proyect.id}
            urlImg={proyect.urlImg}
            title={proyect.title}
            details={proyect.details}
            onClick={this.openModal}
          />
        ))}
        {this.state.openModal && <Proyect {...proyects[this.state.id]} onClick={this.closeModal} />}
      </div>
    );
  }
}

export default Portafolio;
