import { useState } from 'react';
import Container from './styles';
import MenuAnchor from './components/MenuAnchor';
import ActionMenu from './components/ActionMenu';
import { FlexWrapper, WrapperMenuAnchor } from './components/Wrappers';
import CartModal from '../CartModal';
import { useContext } from 'react';
import { Context } from '../../context';

import Product from '../Product';
import Logo from '../../assets/images/logo/agencia-eplus-n-logo.png';
import Menu from '../../assets/images/icons/menu-hamburguer.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { products } = useContext(Context);

  function isMenuOpen() {
    setMenuOpen(!menuOpen);
  }
  function isCartOpen() {
    setCartOpen(!cartOpen);
  }
  return (
    <>
      <Container>
        <img id="logo" src={Logo} alt="Logo" />
        <WrapperMenuAnchor>
          <MenuAnchor />
        </WrapperMenuAnchor>
        <FlexWrapper>
          <ActionMenu isCartOpen={isCartOpen} />
          <img id="menu" src={Menu} alt="Menu" onClick={() => isMenuOpen()} />
        </FlexWrapper>
      </Container>
      {cartOpen && (
        <CartModal>
          {products.cart.item.map((element) => {
            return (
              <Product
                img={element.image}
                name={element.name}
                price={element.bestPriceFormated}
                qtt={element.quantity}
                key={element.id || new Date().toISOString() + Math.random()}
              />
            );
          })}
        </CartModal>
      )}
      {menuOpen && <MenuAnchor />}
    </>
  );
}

export default Navbar;
