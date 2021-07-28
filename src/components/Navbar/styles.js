import styled from 'styled-components';

const Container = styled.nav`
  height: 2.5rem;
  padding: 0.9rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  box-shadow: 3px 3px 2px var(--gray);

  @media (min-width: 900px) {
    padding: 1.1rem 0;
  }

  #logo {
    width: 7rem;

    margin-left: 0.5rem;
    @media (min-width: 300px) {
      margin-left: 1.5rem;
    }

    @media (min-width: 500px) {
      width: 10rem;
    }
    @media (min-width: 700px) {
      width: 14.4rem;
      margin-left: 1.5rem;
    }
    @media (min-width: 1000px) {
      width: 16.4rem;
      height: 3rem;
    }
  }
  #menu {
    height: 2rem;
    margin-right: 0.8rem;

    @media (min-width: 900px) {
      display: none;
    }
  }
`;

export default Container;
