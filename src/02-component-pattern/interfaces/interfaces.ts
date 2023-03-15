
import { Props as ProductCardProps  } from "../components/ProductCard" ;
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


export interface Product {
    id:string;
    img?:string;    
    title:string;
}

export interface ProdutContextProps {
    counter:number;
    increaseBy:(value:number)=>void;
    product:Product;
}


export interface ProductCardHOCProps{
     ({ children, product }: ProductCardProps) : JSX.Element;
     Buttons:({className}:{className?: string}) => JSX.Element;     
     Image: (Props: ProductImageProps) => JSX.Element;
     Title: (props: ProductTitleProps) => JSX.Element;
}   

export interface OnChangeArgs {
    product: Product; 
    count  : number;
}

export interface ProductInCart extends Product{
    count:number
}
