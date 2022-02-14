import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Product } from './products/reducer';

export const reducers = combineReducers({
  productReducer: Product,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
