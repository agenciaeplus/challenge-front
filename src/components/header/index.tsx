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
          <img src={cartIMG} alt="Carrinho de compras" />
        </div>

      </div>
    </header>

  );
}