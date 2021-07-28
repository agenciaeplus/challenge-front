import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  background-color: var(--white);
`;

export const WrapperMenu = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 1rem;

  li {
    margin: 0 0.7rem;

    img {
      height: 1.6rem;
    }
  }

  #profile {
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
`;
