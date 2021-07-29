import styled from 'styled-components';

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
  border: none;

  animation: smoothAppear 0.1s forwards ease-out;

  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 500px) {
    width: 280px;
    height: 375px;

    right: 2%;
  }
  @media (min-width: 900px) {
    width: 320px;
    height: 475px;
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    right: 1%;
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
  #wrapperProducts {
    padding: 0.7rem 0.5rem 0;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      margin-top: 1rem;
      background: #dddddd;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #717171;
    }

    overflow-y: scroll;
    @media (min-width: 900px) {
      padding: 0.7rem 0.8rem 0;
    }
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;

  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 15px solid var(--gray);

  transform: translateX(30px);

  @media (min-width: 300px) {
    transform: translateX(15px);
  }
  @media (min-width: 500px) {
    transform: translateX(55px);
  }
  @media (min-width: 700px) {
    transform: translateX(57px);
  }
  @media (min-width: 900px) {
    transform: translateX(-18px);
  }
  @media (min-width: 1200px) {
    transform: translateX(-14px);
  }
`;

export const DescPrice = styled.p`
  font-size: 0.7rem;
  padding: 1rem 0;
  text-align: center;

  color: var(--gray-title);

  span {
    font-weight: bold;
  }

  @media (min-width: 500px) {
    font-size: 0.9rem;
  }
  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.25rem;
  font-size: 0.7rem;
  font-weight: 800;

  border: none;
  background-color: var(--green);
  color: var(--white);

  @media (min-width: 500px) {
    height: 2.8rem;
    font-size: 0.9rem;
  }

  @media (min-width: 900px) {
    height: 3.5rem;

    font-size: 1rem;
  }
`;
