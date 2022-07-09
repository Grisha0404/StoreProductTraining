import React from 'react';
import './Product.css'
import {useDispatch} from "react-redux";
import {buyingAC} from "../../s2-bll/ProductsActions";
import {getProductBasketAC, setAmountAC} from "../../../shoppingBasket/s2-bll/BasketActions";

type ProductType = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    amount: number,
}

export const Product = ({image, id, description, price, amount, name}: ProductType) => {
    const dispatch = useDispatch()

    const buyClick = () => {
        dispatch(getProductBasketAC({id, description, price, amount, name, image}))
        dispatch(setAmountAC(price))
        dispatch(buyingAC(id, amount))
    }

    return (
        <div className={'productListContainer'}>
            <section className={'productInfo'}>
                <img src={image} alt={'img'} style={{width: '50px', height: '60px'}}/>
                <h1>{name}</h1>
                <span>Описание: {description}</span>
                <span>Цена: {price}</span>
                <span>Кол-во: {amount}</span>
                <button onClick={buyClick} disabled={amount <= 0}>Купить</button>
            </section>
        </div>
    );
};