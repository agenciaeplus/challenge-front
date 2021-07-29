import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  background-color: var(--white);
`;

export const WrapperMenu = styled.ul`
  display: flex;
  margin: 0 auto;

  li {
    margin: 0 0.7rem;

    img {
      height: 1.6rem;
    }
  }

  @media (min-width: 300px) {
    padding: 1rem;
  }
  @media (min-width: 500px) {
    li {
      img {
        height: 2.05rem;
      }
    }
  }
  @media (min-width: 900px) {
    margin-right: 1rem;
    padding: 0;
  }

  @media (min-width: 1200px) {
    margin-right: 1rem;
    li {
      margin: 0 1.6rem;
      img {
        height: 2.05rem;
      }
    }
  }
  #profile {
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
`;
