import Container from './style';

import Image from '../../assets/images/products/note01-samsung-160-160.jpg';

function Product() {
  return (
    <>
      <Container>
        <img src={Image} />
        <p id="productName">
          Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style
          S51 Pro
        </p>
        <p id="productInfo">
          Qtd.: 1 <span>R$ 7.158,21</span>
        </p>
      </Container>
    </>
  );
}

export default Product;
