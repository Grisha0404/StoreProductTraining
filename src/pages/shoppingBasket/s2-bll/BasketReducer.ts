import {BasketReducerType} from "./BasketActions";
import {initState, InitStateType} from "./BasketInitState";


export const basketReducer = (state = initState, action: BasketReducerType): InitStateType => {
    switch (action.type) {
        case "SET-AMOUNT":
            return {...state, price: state.price + action.id}
        case "GET-PRODUCT-PAYING":
            return {...state, productBasket: [action.data, ...state.productBasket]}
        case "DELETE-PRODUCT":
            return {
                ...state,
                productBasket: state.productBasket.filter(el => el.id !== action.id),
                price: state.price - action.price
            }
        default: {
            return {...state}
        }
    }
};