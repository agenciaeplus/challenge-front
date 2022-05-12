import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Produtos = () => {
  const [data, setData] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch('./products.json');
      const json = await response.json();
      setData(json);

      const price = json.cart.item.reduce(
        (prev, json) => prev + json.quantity * json.bestPrice,
        0,
      );
      setPrice(price);
    }
    getData();
  }, []);

  return (
    <>
      <section className={styles.container}>
        {data &&
          data.cart.item.map((item) => (
            <div className={styles.content} key={item.productId}>
              <img src={item.image} alt={item.name} />
              <div className={styles.info}>
                <h1>{item.name}</h1>
                <div className={styles.info_preco}>
                  <p>Qtd.: {item.quantity}</p>
                  <span>
                    {(item.quantity * item.bestPrice).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </section>

      <div className={styles.total}>
        <p>
          Total do pedido:{' '}
          <span>
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </p>
      </div>

      <div className={styles.finish}>
        <p>Finalizar compra</p>
      </div>
    </>
  );
};

export default Produtos;
