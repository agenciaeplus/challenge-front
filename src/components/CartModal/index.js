import { Container, Triangle, Button, DescPrice } from './styles';

function CartModal({ children }) {
  return (
    <Container>
      <div id="wrapperTriangle">
        <Triangle />
      </div>
      <div id="wrapperProducts">{children}</div>
      <div>
        <DescPrice>
          Total do pedido: <span>R$ 100.000,00</span>
        </DescPrice>
        <Button>FINALIZAR COMPRA</Button>
      </div>
    </Container>
  );
}

export default CartModal;
