import { Container, WrapperMenu } from './style';

import Cart from '../../../../assets/images/icons/cart.svg';
import Profile from '../../../../assets/images/icons/profile.svg';
import Search from '../../../../assets/images/icons/search.svg';

function ActionMenu() {
  return (
    <Container>
      <WrapperMenu>
        <li>
          <img src={Search} alt="procurar"></img>
        </li>
        <li id="profile">
          <img src={Profile} alt="perfil"></img>
        </li>
        <li>
          <img src={Cart} alt="Carrinho"></img>
        </li>
      </WrapperMenu>
    </Container>
  );
}

export default ActionMenu;
