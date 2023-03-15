import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";
interface useProductArgs{
    product:Product;
    onChange?:(arg:OnChangeArgs)=>void;
    value?: number;
}
export const useProduct = ({onChange, product, value = 0}: useProductArgs)=>{
    const [counter, setCounter] = useState( value );
    
    const isControlled = useRef<boolean>(!!onChange)

   

    function increaseBy(value:number){ 
        
        if(isControlled.current){
            return onChange!({count:value, product});
        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({product, count: newValue});
    }
    
    useEffect(() => {
        setCounter( value );
    }, [value]);

    return {
        counter,
        increaseBy,
    }
}