import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import  styles  from "../styles/styles.module.css";
import { OnChangeArgs, Product, ProdutContextProps,  } from "../interfaces/interfaces";


export interface Props{
    product: Product;
    children?: ReactElement | ReactElement [];
    className?:string;
    style?: CSSProperties;
    onChange?:(args:OnChangeArgs)=> void;
    value?: number;
}

export const ProductContext =  createContext<ProdutContextProps>({} as ProdutContextProps);
const { Provider } = ProductContext;


export function ProductCard({children, product, className, style, onChange, value }: Props) {
    const {counter, increaseBy} = useProduct({ onChange, product, value });
    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}



export default ProductCard
