import styled from 'styled-components';

export const Wrapper = styled.ul`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  background-color: var(--white);

  li {
    margin: 0.6rem 0;

    @media (min-width: 900px) {
      min-width: max-content;
      padding: 0 0.3rem;
    }
    @media (min-width: 1100px) {
      padding: 0 0.9rem;
      font-size: 1.1rem;
    }
  }

  @media (min-width: 900px) {
    font-size: 1rem;

    flex-direction: row;
  }
`;
export const ProfileLi = styled.li`
  display: flex;
  align-items: center;

  img {
    height: 1.6rem;
    margin-right: 0.3rem;
  }

  @media (min-width: 600px) {
    display: none;
  }

  @media (min-width: 900px) {
    margin: 0 auto;
  }
`;
