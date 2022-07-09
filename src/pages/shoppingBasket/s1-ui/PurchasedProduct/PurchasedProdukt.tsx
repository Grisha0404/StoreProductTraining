import React from 'react';
import './Purchased.css'
import {useDispatch} from "react-redux";
import {deleteProductAC} from "../../s2-bll/BasketActions";

type PurchasedProductType = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    amount?: number,
}

export const PurchasedProduct = ({image, id, description, price, amount, name}: PurchasedProductType) => {
    const dispatch = useDispatch()

    const buyClick = () => {
        dispatch(deleteProductAC(id, price))
    }

    return (
        <div className={'purchasedProductListContainer'}>
            <section className={'purchasedProductInfo'}>
                <img src={image} alt={'img'} style={{width: '50px', height: '60px', backgroundColor: 'green'}}/>
                <h1>{name}</h1>
                <span>Описание: {description}</span>
                <span>Цена: {price}</span>
                <span>Кол-во: 1</span>
                <button onClick={buyClick}>Удалить</button>
            </section>
        </div>
    );
};