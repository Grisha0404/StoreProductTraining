import React, {useEffect, useState} from 'react';
import './Product/Product.css'
import {Product} from "./Product/Product";
import {Input} from "../../Input/Input";
import {clearIcon, searchIcon} from "../../../assets/images/icons";
import {useDebounce} from "../../../hooks/useDebounce";
import {ProductType} from "../s2-bll/ProductsInitState";
import {useDispatch, useSelector} from "react-redux";
import {filterProductAC, getProductsAC} from "../s2-bll/ProductsActions";
import {AppStoreType} from "../../../Redux/reduxStore";

const ProductsPage = () => {
    const product_ = useSelector<AppStoreType, Array<ProductType>>(state => state.products.productList)
    const [search, setSearch] = useState<string>('')
    const searchDebounce = useDebounce(search, 1500);
    const dispatch = useDispatch()

    useEffect(() => {
        if (search !== '') {
            dispatch(filterProductAC(search))
        } else {
            dispatch(getProductsAC())
        }
    }, [searchDebounce])

    return (
        <div>
            <section style={{margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Input type={'text'}
                       iconBefore={searchIcon}
                       iconAfter={clearIcon}
                       placeholder={'Search'}
                       onChangeText={setSearch}/>
            </section>
            <div className={'productList'}>
                {product_.map(el => <Product key={el.id} id={el.id} name={el.name} image={el.image}
                                             description={el.description} price={el.price} amount={el.amount}/>)}
            </div>
        </div>
    );
};

export default ProductsPage;
