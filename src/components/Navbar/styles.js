import styled from 'styled-components';

const Container = styled.nav`
  height: 2.5rem;
  padding: 0.9rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);

  #logo {
    width: 7rem;
    height: 1.5rem;
    margin-left: 1.5rem;
  }
  #menu {
    height: 2rem;

    margin-right: 0.8rem;
  }
`;

export default Container;
