import {ProductType} from "../../products/s2-bll/ProductsInitState";

export type InitStateType = {
    productBasket: ProductType[]
    amountBuy: number,
    price: number,
}

export const initState: InitStateType = {
    productBasket: [],
    amountBuy: 0,
    price: 0
}