import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import  styles  from "../styles/styles.module.css";
import { Product, ProdutContextProps,  } from "../interfaces/interfaces";


export interface Props{
    product: Product;
    children?: ReactElement | ReactElement [];
    className?:string;
    style?: CSSProperties;
}

export const ProductContext =  createContext<ProdutContextProps>({} as ProdutContextProps);
const { Provider } = ProductContext;


export function ProductCard({children, product, className, style }: Props) {
    const {counter, increaseBy} = useProduct();
    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}



export default ProductCard
