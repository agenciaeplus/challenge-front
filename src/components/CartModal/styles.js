import styled from 'styled-components';

export const Triangle = styled.div`
  width: 0;
  height: 0;

  transform: translateX(15px);

  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 15px solid var(--gray);

  @media (min-width: 900px) {
    transform: translateX(-15px);
  }
`;

export const Container = styled.section`
  width: 200px;
  height: 300px;

  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: translateY(-15px);
  background-color: var(--gray);

  @media (min-width: 900px) {
    width: 320px;
    height: 475px;

    right: 3%;
  }

  #wrapperTriangle {
    width: 100%;

    display: flex;
    justify-content: center;

    background-color: var(--white);

    @media (min-width: 900px) {
      justify-content: flex-end;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.25rem;

  border: none;
  background-color: var(--green);
  color: var(--white);

  @media (min-width: 900px) {
    height: 3.5rem;

    font-size: 1rem;
    font-weight: 800;
  }
`;
