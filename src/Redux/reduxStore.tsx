import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import { productsReducer} from "../pages/products/s2-bll/ProductsReducer";
import {ProductReducerType} from "../pages/products/s2-bll/ProductsActions";
import {basketReducer} from "../pages/shoppingBasket/s2-bll/BasketReducer";
import {BasketReducerType} from "../pages/shoppingBasket/s2-bll/BasketActions";

const reducers = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof reducers>;
export type ActionType = ProductReducerType | BasketReducerType;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, ActionType>


// @ts-ignore
window.store = store;
