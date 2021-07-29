import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const Context = createContext({});

export function Provider({ children }) {
  const [products, setProducts] = useState();
  const [total, setTotal] = useState(0);

  function getTotal(arr) {
    return arr.reduce((acum, element) => {
      return (acum += element.quantity * element.bestPrice);
    }, 0);
  }

  useEffect(async () => {
    fetch(`${process.env.PUBLIC_URL}/data/products.json`).then(async (res) => {
      return res.json().then((res) => {
        setProducts(res);
      });
    });
  }, []);

  useEffect(() => {
    products && setTotal(getTotal(products.cart.item));
  }, [products]);

  return (
    <Context.Provider
      value={{
        products,
        total,
      }}
    >
      {children}
    </Context.Provider>
  );
}
