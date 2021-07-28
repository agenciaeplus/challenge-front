import { useState } from 'react';
import { Container, FlexWrapper, WrapperMenuAnchor } from './styles';
import MenuAnchor from './components/MenuAnchor';
import ActionMenu from './components/ActionMenu';

import Logo from '../../assets/images/logo/agencia-eplus-n-logo.png';
import Menu from '../../assets/images/icons/menu-hamburguer.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function isMenuOpen() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <Container>
        <img id="logo" src={Logo} alt="Logo" />
        <WrapperMenuAnchor>
          <MenuAnchor />
        </WrapperMenuAnchor>
        <FlexWrapper>
          <ActionMenu />
          <img id="menu" src={Menu} alt="Menu" onClick={() => isMenuOpen()} />
        </FlexWrapper>
      </Container>
      {menuOpen && <MenuAnchor />}
    </>
  );
}

export default Navbar;
