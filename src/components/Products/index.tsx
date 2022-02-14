import { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as actions from '../../store/products/actions';
import { IProduct } from '../../store/products/reducer';
import './styles.css';

export function Products(): ReactElement {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.productReducer);

  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);

  function handleAddToCard(product: IProduct): void {
    dispatch(actions.AddProduct(product));
  }

  return (
    <div className="product">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <span>Preço: {product.price}</span>
            <span>Quantidade: {product.qtd}</span>
            <button type="button" onClick={() => handleAddToCard(product)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
