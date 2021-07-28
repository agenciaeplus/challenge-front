import styled from 'styled-components';

export const Container = styled.nav`
  height: 2.5rem;
  padding: 0.9rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);

  @media (min-width: 900px) {
    padding: 1.1rem 0;
  }

  #logo {
    width: 7rem;
    margin-left: 1.5rem;

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

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    padding: 0 1rem;
  }
`;

export const WrapperMenuAnchor = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;
