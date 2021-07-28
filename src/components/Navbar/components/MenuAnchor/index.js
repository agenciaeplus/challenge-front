import { Wrapper, ProfileLi } from './style';
import Profile from '../../../../assets/images/icons/profile.svg';

function MenuAnchor() {
  return (
    <Wrapper>
      <ProfileLi>
        <img src={Profile} alt="perfil" />
        Perfil
      </ProfileLi>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
    </Wrapper>
  );
}

export default MenuAnchor;
