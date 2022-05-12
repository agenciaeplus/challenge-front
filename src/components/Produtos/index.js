import React from 'react';
import styles from './styles.module.css';

import notebook from '../../assets/images/products/note02-samsung-160-160.jpg';

const Produtos = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={notebook} alt="Notebook Samsung" />
        <div className={styles.info}>
          <h1>Notebook Samsung Intel Core</h1>
          <div className={styles.info_preco}>
            <p>Qtd.: 1</p>
            <span>R$ 7.158,21</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <img src={notebook} alt="Notebook Samsung" />
        <div className={styles.info}>
          <h1>Notebook Samsung Intel Core</h1>
          <div className={styles.info_preco}>
            <p>Qtd.: 1</p>
            <span>R$ 7.158,21</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <img src={notebook} alt="Notebook Samsung" />
        <div className={styles.info}>
          <h1>Notebook Samsung Intel Core</h1>
          <div className={styles.info_preco}>
            <p>Qtd.: 1</p>
            <span>R$ 7.158,21</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <img src={notebook} alt="Notebook Samsung" />
        <div className={styles.info}>
          <h1>Notebook Samsung Intel Core</h1>
          <div className={styles.info_preco}>
            <p>Qtd.: 1</p>
            <span>R$ 7.158,21</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <img src={notebook} alt="Notebook Samsung" />
        <div className={styles.info}>
          <h1>Notebook Samsung Intel Core</h1>
          <div className={styles.info_preco}>
            <p>Qtd.: 1</p>
            <span>R$ 7.158,21</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
