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
`;
