import './styles.scss';

import logoIMG from '../../assets/images/logo.png';
import searchIMG from '../../assets/images/search.svg';
import personIMG from '../../assets/images/person.svg';
import cartIMG from '../../assets/images/cart.svg';


export function Header() {
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
                <div className="items-cart">

                  <img className='image-cart' src={cartIMG} alt="Texto alternativo" />

                  <div className="text">
                    <p>Notebook Samsung e texto teste grgerfeththyj wgergrntynt</p>
                    <span className='items-values'>
                      <a className='quantity'>Qtd: 1</a>
                      <a className='price'>R$7.158,21</a>
                    </span>
                  </div>
                </div>
              </section>

              <span className='total-price'>
                Total do Pedido: &nbsp; <strong>R$ 20.356,95</strong>
              </span>

              <button className='btn-finish'>FINALIZAR COMPRA</button>
            </div>
          </div>

        </div>

      </div>
    </header>

  );
}