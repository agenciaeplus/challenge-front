import { useState } from 'react';
import Container from './styles';
import MenuAnchor from './components/MenuAnchor';

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
        <img id="menu" src={Menu} alt="Menu" onClick={() => isMenuOpen()} />
      </Container>
      {menuOpen && <MenuAnchor />}
    </>
  );
}

export default Navbar;
