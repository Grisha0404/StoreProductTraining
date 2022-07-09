import React from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../RouteNames";
import './NavLink.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";

export const Nav = () => {
    const price = useSelector<AppStoreType, number>(state => state.basket.price)

    return (
        <div className={'nav'}>
            <div className={'navContainer'}>
            <Link to={RouteNames.HOME}>Главная</Link>
            <Link to={RouteNames.PRODUCTS}>Товары</Link>
            <Link to={RouteNames.SHOPPINGBASKET}>Корзина<span> ({price} byn)</span></Link>
            {/*<Link to={RouteNames.NOT_FOUND}>404</Link>*/}
            </div>
        </div>
    );
};
