import Container from './styles';

import Logo from '../../assets/images/logo/agencia-eplus-n-logo.png';
import Menu from '../../assets/images/icons/menu-hamburguer.svg';

function Navbar() {
  return (
    <Container>
      <img id="logo" src={Logo} alt="Logo" />
      <img id="menu" src={Menu} alt="Menu"></img>
    </Container>
  );
}

export default Navbar;
