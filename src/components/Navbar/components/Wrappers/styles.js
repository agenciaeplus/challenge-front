import styled from 'styled-components';

export const FlexWrapperStyle = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    padding-left: 1rem;
  }
`;

export const WrapperMenuAnchorStyle = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;
