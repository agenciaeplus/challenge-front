import React from 'react';
import styles from './styles.module.css';

import notebook from '../../assets/images/products/note02-samsung-160-160.jpg';

const Produtos = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src={notebook} alt="Notebook Samsung" />
          <div className={styles.info}>
            <h1>Notebook Samsung Intel Core</h1>
            <div className={styles.info_preco}>
              <p>Qtd.: 2</p>
              <span>R$ 7.3232158,21</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <img src={notebook} alt="Notebook Samsung" />
          <div className={styles.info}>
            <h1>Notebook Samsung Intel Core</h1>
            <div className={styles.info_preco}>
              <p>Qtd.: 2</p>
              <span>R$ 7.3232158,21</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <img src={notebook} alt="Notebook Samsung" />
          <div className={styles.info}>
            <h1>Notebook Samsung Intel Core</h1>
            <div className={styles.info_preco}>
              <p>Qtd.: 2</p>
              <span>R$ 7.3232158,21</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <img src={notebook} alt="Notebook Samsung" />
          <div className={styles.info}>
            <h1>Notebook Samsung Intel Core</h1>
            <div className={styles.info_preco}>
              <p>Qtd.: 2</p>
              <span>R$ 7.3232158,21</span>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.total}>
        <p>
          Total do pedido: <span>R$ 20.356,95</span>
        </p>
      </div>
      <div className={styles.finish}>
        <p>Finalizar compra</p>
      </div>
    </>
  );
};

export default Produtos;
