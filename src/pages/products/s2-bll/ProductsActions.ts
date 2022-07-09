export type ProductReducerType = BuyingACType | GetProductsACType | FilterProductACType;
type BuyingACType = ReturnType<typeof buyingAC>;
type GetProductsACType = ReturnType<typeof getProductsAC>;
type FilterProductACType = ReturnType<typeof filterProductAC>;

export const buyingAC = (id: number, amount: number) => ({type: 'PRODUCT_BUY', id, amount} as const)
export const getProductsAC = (name?: string) => ({type: 'GET-PRODUCT', name} as const)
export const filterProductAC = (search: string) => ({type: 'FILTER-PRODUCT', search} as const)