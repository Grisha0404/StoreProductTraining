export type ProductType = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    amount: number,
}

export type AllProductType = {
    productList: ProductType[],
    messageError: string
}

export const allProduct: AllProductType = {
    productList: [],
    messageError: 'No'
}

