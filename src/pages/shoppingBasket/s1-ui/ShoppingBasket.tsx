import React from 'react';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../Redux/reduxStore";
import {ProductType} from "../../products/s2-bll/ProductsInitState";
import {PurchasedProduct} from "./PurchasedProduct/PurchasedProdukt";

const ShoppingBasket = () => {
    const productBasket = useSelector<AppStoreType, ProductType[]>(state => state.basket.productBasket)

    return (
        <div>
            {productBasket.length === 0 ?
                <h3>Корзина пуста</h3> :
                <div className={'productList'}>
                    {productBasket.map(el => <PurchasedProduct key={el.id} id={el.id} name={el.name} image={el.image}
                                                               description={el.description} price={el.price}
                                                               amount={el.amount}/>)}
                </div>}

        </div>
    );
};

export default ShoppingBasket;
