import {allProduct, AllProductType} from "./ProductsInitState";
import {ProductReducerType} from "./ProductsActions";
import {productList} from "../../../assets/products/products";


export const productsReducer = (state = allProduct, action: ProductReducerType): AllProductType => {
    switch (action.type) {
        case "GET-PRODUCT":
            return {...state, productList: productList.map(el => el)}
        case "PRODUCT_BUY":
            return {
                ...state,
                productList: productList.map(el => el.id === action.id ? {...el, amount: action.amount - 1} : el)
            }
        case 'FILTER-PRODUCT':
            return {
                ...state,
                productList: productList.filter(el => el.name.toLowerCase() === action.search.toLowerCase())
            }
        default: {
            return {...state}
        }
    }
};