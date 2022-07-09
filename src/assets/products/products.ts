import Juice from "../images/product/сок.jpeg";
import Bread from "../images/product/хлеб.jpeg";
import Eggs from "../images/product/яйца.jpeg";
import Milk from "../images/product/4.png";
import Pasta from "../images/product/макароны.webp";
import Buckwheat from "../images/product/гречка.jpeg";
import Rice from "../images/product/rice.jpeg";
import Chicken from "../images/product/курица.png";
import {ProductType} from "../../pages/products/s2-bll/ProductsInitState";

export const productList: ProductType[] = [
    {
        id: 1,
        name: 'Juice',
        image: Juice,
        description: 'Orange juice',
        price: 10,
        amount: 10
    },
    {
        id: 2,
        name: 'Bread',
        image: Bread,
        description: 'Black bread',
        price: 8,
        amount: 2
    },
    {
        id: 3,
        name: 'Eggs',
        image: Eggs,
        description: 'Chicken eggs',
        price: 13,
        amount: 20
    },
    {
        id: 4,
        name: 'Milk',
        image: Milk,
        description: 'Cow milk 1,5%',
        price: 13,
        amount: 20
    },
    {
        id: 5,
        name: 'Pasta',
        image: Pasta,
        description: 'Tubular products made...',
        price: 13,
        amount: 20
    },
    {
        id: 6,
        name: 'Buckwheat',
        image: Buckwheat,
        description: 'Cereal family',
        price: 13,
        amount: 20
    },
    {
        id: 7,
        name: 'Rice',
        image: Rice,
        description: 'Cereal family',
        price: 13,
        amount: 20
    },
    {
        id: 8,
        name: 'Chicken',
        image: Chicken,
        description: 'Runs well and fast',
        price: 13,
        amount: 20
    },
]