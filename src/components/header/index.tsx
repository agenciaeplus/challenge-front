import './styles.scss';

import logoIMG from '../../assets/images/logo.png';
import searchIMG from '../../assets/images/search.svg';
import personIMG from '../../assets/images/person.svg';
import cartIMG from '../../assets/images/cart.svg';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../util/formt';

interface itensCartProps {
  productId: string;
  name: string;
  bestPriceFormated: string;
  bestPrice: number;
  image: string;
  quantity: number
}

export function Header() {

  const [items, setItems] = useState<itensCartProps[]>([])

  useEffect(() => {
    api.get(``).then(response => {
      setItems(response.data.cart.item);
    })
  }, []);

  const saleTotal =
    formatPrice(
      items.reduce((sumTotal, items) => {
        // sumTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 });
        // items.bestPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 });
        // console.log("Sum total:" + sumTotal);
        // console.log("bestPrice:" + items.bestPrice);
        return sumTotal + items.bestPrice * items.quantity;

      }, 0)
    )

  console.log(saleTotal);

  return (


    <header className="container">
      <div className="content">
        <img src={logoIMG} alt="E Plus" />

        <nav>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
        </nav>

        <div className="icons">
          <img src={searchIMG} alt="Pesquisar" />
          <img src={personIMG} alt="Perfil" />

          <div className="dropdown">
            <button className="dropBtn">
              <img src={cartIMG} alt="Carrinho de compras" />
            </button>

            <div className="dropdown-content">
              <section className="cart-content">

                {items.map(item => (
                  <div className="items-cart" key={item.productId}>

                    <img className='image-cart' src={item.image} alt="Texto alternativo" />

                    <div className="text">
                      <p>{item.name}</p>
                      <span className='items-values'>
                        <a className='quantity'>Qtd: {item.quantity}</a>
                        <a className='price'>{item.bestPriceFormated}</a>
                      </span>
                    </div>
                  </div>
                ))}

              </section>

              <span className='total-price'>
                Total do Pedido: &nbsp; <strong>{saleTotal}</strong>
              </span>

              <button className='btn-finish'>FINALIZAR COMPRA</button>
            </div>
          </div>

        </div>

      </div>
    </header>

  );
}