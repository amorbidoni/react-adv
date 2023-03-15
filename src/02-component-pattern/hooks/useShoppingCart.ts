import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = ()=> {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({
        // '1': {...product1, count: 10},
        // '2': {...product2, count: 2},
    });

    const onProductCountChange = ({count, product}:{count:number, product:Product})=> {
       setShoppingCart(oldShoppingCart => {
        // forma simple de resolver el carrito cuando el estado esta controlado por el useState de useProduct. 
        // pero si el estado lo controlamos con las props, el count va a devolver 1 y -1 por lo cual este codigo no sirve
        if(count === 0){
            const {[product.id]: toDelete, ...rest} = oldShoppingCart
            // delete oldShoppingCart[product.id];
          return {
            ...rest
          }
        }
        return {
            ...oldShoppingCart,
            [product.id]: {...product, count}
        }
       })
    }

    return {
        onProductCountChange,
        shoppingCart
    }

}