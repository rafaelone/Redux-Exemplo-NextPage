import { Dispatch } from 'redux';
import api from '../../services/api';
import { IProduct } from './reducer';
import * as types from './types';

export const getProducts =
  () =>
  (dispatch: Dispatch): void => {
    api
      .get('/products')
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCTS,
          products: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

export const AddProduct =
  (product: IProduct) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: types.ADD_PRODUCT_TO_CART,
      product,
    });
  };
