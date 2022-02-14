import { ReactElement } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './styles.css';

export function Cart(): ReactElement {
  const { productInCart } = useSelector(
    (state: RootState) => state.productReducer,
  );

  return (
    <button type="button" className="cart">
      <AiOutlineShoppingCart size={20} />
      <strong>{productInCart.length}</strong>
    </button>
  );
}
