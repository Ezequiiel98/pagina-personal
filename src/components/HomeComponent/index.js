import React, { Component } from 'react';

// import Paragraph from '../Paragraph';

import Button from './components/Button';
import styles from './index.module.scss';

const p = true;
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.state = {
      isFall: true
    };
  }

  componentDidMount() {
    this.insertSpans();
  }

  // Hola mi nombre es Ezequiel Aragon. Soy desarrollador web front-end junior en React

  insertSpans = () => {
    const paragraph = 'Lorem Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem ';
    let spans = '';

    for (let i = 0; i < paragraph.length; i++) {
      spans += `<span>${paragraph[i]}</span>`;
    }

    this.text.current.innerHTML = spans;

    this.positionSpans();
  };

  positionSpans = () => {
    const spans = this.text.current.childNodes;
    const width = 600;
    this.text.current.style.width = `${width}px`;
    let left = 6;
    let Top = 0;

    spans.forEach(span => {
      span.style = `position:absolute; left: ${left}px; top: ${Top}px; min-width: 18px; text-align: center;`;
      left = left + 10;
      if (left >= width) {
        left = 6;
        Top += 20;
      }
    });
  };

  upSpans = i => {
    const spans = this.text.current.childNodes;
    if (i < spans.length) {
      setTimeout(() => {
        spans[i].classList.add(styles.up);
        spans[i].classList.remove(styles.down);
        this.upSpans(i + 1);
      }, 4);
    }
  };

  downSpans = i => {
    const spans = this.text.current.childNodes;
    if (i < spans.length) {
      setTimeout(() => {
        spans[i].classList.add(styles.down);
        spans[i].classList.remove(styles.up);
        this.downSpans(i + 1);
      }, 4);
    }
  };

  handleClick = () => {
    if (this.state.isFall) {
      this.downSpans(0);
      this.setState({ isFall: false });
    } else {
      this.upSpans(0);
      this.setState({ isFall: true });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.presentation} ref={this.text}>
          {' '}
        </div>
        <Button
          className={styles.button}
          value={this.state.isFall ? 'Caer letras' : 'Subir letras'}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default HomeComponent;

// let palabras = 'Hola mi nombre es Ezequiel Aragon. Soy desarrollador web front-end junior en React'
// let palabrasContenedor = document.querySelector('.palabras')
// let p = ''

// for (let i = 0; i < palabras.length; i++) p += `<span>${palabras[i]}</span>`

// palabrasContenedor.innerHTML = p

// function nose (claseAgregar, claseBorrar, i, nombreFuncion){
//    setTimeout(() => {
//       palabrasSpan[i].classList.add(claseAgregar)
//       palabrasSpan[i].classList.remove(claseBorrar)
//       nombreFuncion(i + 1)

//    }, 30);
// }

// function caer(i) {
//    (i < palabrasSpan.length) ?   nose('caer','subir', i,caer) : false;
// }

// function subir(i) {
//    (i < palabrasSpan.length) ? nose('subir','caer', i,subir) : false;
// }

// let btn = document.querySelector('#btn');
// let btnCaer = true;

// btn.addEventListener('click', () => {
//    if (btnCaer) {
//       caer(0)
//       btnCaer = !btnCaer
//       btn.innerText = 'Subir letras'
//    } else {
//       subir(0);
//       btnCaer = !btnCaer
//       btn.innerText = 'Caer letras'
//    }
// })
