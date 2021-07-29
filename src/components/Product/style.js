import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 65px;

  display: grid;
  grid-template-areas:
    'side nameArea'
    'side info';
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr 20px;
  grid-gap: 10px;
  padding: 0.5rem 0;

  border-bottom: solid 1px #e7e7e7;
  cursor: pointer;

  img {
    grid-area: side;
    width: 60px;
  }
  #productName {
    font-size: 0.8rem;
    line-height: 1rem;
    height: 2.13rem;

    margin-top: 0.2rem;
    grid-area: nameArea;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  #productInfo {
    width: 100%;
    font-size: 0.65rem;
    font-weight: 500;

    display: flex;
    justify-content: space-between;
    grid-area: info;
    margin-top: 0.2rem;

    span {
      font-weight: 600;

      margin-right: 0.8rem;

      color: var(--green);
    }
  }

  /**************all configs to 500px************************/
  @media (min-width: 500px) {
    font-size: 0.8rem;

    grid-template-columns: 90px 1fr;
    padding: 1rem 0;

    img {
      width: 80px;
      height: 70px;
    }
    #productName {
      font-size: 0.85rem;

      margin-top: 0.3rem;
    }
    #productInfo {
      margin-top: 0.3rem;
      font-size: 0.75rem;

      span {
        margin-right: 1.8rem;
      }
    }
  }

  /**************all configs to 900px************************/
  @media (min-width: 900px) {
    height: 80px;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 2.3rem 20px;
    grid-gap: 5px;
    img {
      width: 90px;
      height: 70px;
    }
    #productName {
      width: 120px;

      margin-top: 0.5rem;
    }
    #productInfo {
      margin-top: 0.6rem;
      font-size: 0.85rem;

      span {
      }
    }
  }
`;

export default Container;
