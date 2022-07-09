import {ProductType} from "../../products/s2-bll/ProductsInitState";

export type BasketReducerType = BuyingACType | GetProductBasketACType | DeleteProductACType;
type BuyingACType = ReturnType<typeof setAmountAC>;
type GetProductBasketACType = ReturnType<typeof getProductBasketAC>;
type DeleteProductACType = ReturnType<typeof deleteProductAC>;

export const setAmountAC = (id: number) => ({type: 'SET-AMOUNT', id} as const);
export const getProductBasketAC = (data: ProductType) => ({type: 'GET-PRODUCT-PAYING', data} as const);
export const deleteProductAC = (id: number, price: number) => ({type: 'DELETE-PRODUCT', id, price} as const);
