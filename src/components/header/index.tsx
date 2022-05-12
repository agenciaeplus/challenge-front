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
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="items-cart">

                <img src={logoIMG} alt="" />

                <div className="text">
                  <h4>Notebook Samsung e texto teste</h4>
                  <p>Qtd: 1</p>
                  <p>RS 7.158,21</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>

  );
}