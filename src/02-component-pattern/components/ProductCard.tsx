import { createContext, useContext } from "react";
import { useProduct } from "../hooks/useProduct";
import  styles  from "../styles/styles.module.css";
import { ProdutContextProps, ProductCardProps } from "../interfaces/interfaces";




export const ProductContext =  createContext<ProdutContextProps>({} as ProdutContextProps);
const { Provider } = ProductContext;


export function ProductCard({children, product }: ProductCardProps) {
    const {counter, increaseBy} = useProduct();
    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}



export default ProductCard
