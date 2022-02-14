import * as types from './types';

export type IProduct = {
  id: number;
  name: string;
  price: number;
  qtd: number;
};

type Action = {
  products: IProduct[];
  product: IProduct;
  type: string;
};

type ProductReducer = {
  products: IProduct[];
  productInCart: IProduct[];
  didValidate: boolean;
};

const INITIAL_STATE: ProductReducer = {
  products: [],
  productInCart: [],
  didValidate: true,
};

export function Product(state = INITIAL_STATE, action: Action): ProductReducer {
  switch (action.type) {
    case types.GET_PRODUCTS: {
      const { products } = action;
      return {
        ...state,
        products,
      };
    }
    case types.ADD_PRODUCT_TO_CART: {
      const { product } = action;
      console.log('CHEGOU');
      console.log(product);
      return {
        ...state,
        productInCart: [...state.productInCart, product],
      };
    }
    default:
      return state;
  }
}
