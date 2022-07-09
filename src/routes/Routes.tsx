import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteNames} from "./RouteNames";
import {HomePage} from "../pages/Home/HomePage";
import ProductsPage from "../pages/products/s1-ui/ProductsPage";
import ShoppingBasket from "../pages/shoppingBasket/s1-ui/ShoppingBasket";
import {NotFoundPage} from "../pages/Error/NotFound/NotFoundPage";

export const RoutesPage = () => {
    return (
        <Routes>
            <Route path={RouteNames.HOME} element={<HomePage/>}/>
            <Route path={RouteNames.PRODUCTS} element={<ProductsPage/>}/>
            <Route path={RouteNames.SHOPPINGBASKET} element={<ShoppingBasket/>}/>
            <Route path={RouteNames.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
    );
};

