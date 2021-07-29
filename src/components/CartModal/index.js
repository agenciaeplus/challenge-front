import { useContext } from 'react';
import { Context } from '../../context';

import { Container, Triangle, Button, DescPrice } from './styles';

function CartModal({ children }) {
  const { total } = useContext(Context);

  return (
    <Container>
      <div id="wrapperTriangle">
        <Triangle />
      </div>
      <div id="wrapperProducts">{children}</div>
      <div>
        <DescPrice>
          Total do pedido:{' '}
          <span>
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </DescPrice>
        <Button>FINALIZAR COMPRA</Button>
      </div>
    </Container>
  );
}

export default CartModal;
