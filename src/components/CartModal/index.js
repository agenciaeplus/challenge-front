import { Container, Triangle, Button } from './styles';

function CartModal({ children }) {
  return (
    <Container>
      <div id="wrapperTriangle">
        <Triangle />
      </div>
      {children}
      <Button>FINALIZAR COMPRA</Button>
    </Container>
  );
}

export default CartModal;
