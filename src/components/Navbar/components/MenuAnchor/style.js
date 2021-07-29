import styled from 'styled-components';

export const Wrapper = styled.ul`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem 0 1rem;

  background-color: var(--white);

  animation: smoothAppear 0.3s forwards ease-out;

  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  li {
    padding: 0.7rem;
    margin: 0.6rem 0;

    cursor: pointer;

    :hover {
      color: var(--green);
    }

    @media (min-width: 900px) {
      min-width: max-content;
      padding: 0 0.3rem;
      font-size: 0.8rem;
    }

    @media (min-width: 1100px) {
      padding: 0 0.9rem;
      font-size: 0.9rem;
    }
  }

  @media (min-width: 900px) {
    padding: 0;
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
