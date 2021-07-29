import Container from './style';

function Product({ img, name, price, qtt }) {
  return (
    <>
      <Container>
        <img src={img} />
        <p id="productName">{name}</p>
        <p id="productInfo">
          Qtd.: {qtt} <span>{price}</span>
        </p>
      </Container>
    </>
  );
}

export default Product;
