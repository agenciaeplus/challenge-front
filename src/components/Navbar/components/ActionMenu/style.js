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

  @media (min-width: 800px) and (max-width: 950px) {
    padding: 0 1rem 0 0;
  }
  /* @media (min-width: 900px) {
    padding: 0;
    margin-right: 1rem;
    li {
      margin: 0 1.6rem;
      img {
        height: 2.05rem;
      }
    } */
  @media (min-width: 1200px) {
    padding: 0;
    margin-right: 1rem;
    li {
      margin: 0 1.6rem;
      img {
        height: 2.05rem;
      }
    }
  }
`;
