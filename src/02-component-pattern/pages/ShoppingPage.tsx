import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';




function ShoppingPage() {

     const { onProductCountChange, shoppingCart } = useShoppingCart();
    
    return (
        <>
        <div>
            <h1>Shoppping Page</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row'}}>
                {
                    products.map(product =>(
                    <ProductCard 
                        key={product.id} 
                        product={ product }  
                        className="bg-dark text-bold"
                        onChange={ onProductCountChange }
                        value={shoppingCart[product.id]?.count || 0}>
                        <ProductImage className='custom-image'/>
                        <ProductTitle className='text-white'/>
                        <ProductButtons  className='custom-buttons'/>
                    </ProductCard>
                    ))
                }
            
            </div>
            <div className="shopping-cart">
                    {
                        Object.entries(shoppingCart).map(([key, product])=>(
                            <ProductCard 
                                key={key}
                                product={ product }  
                                className="bg-dark text-bold" 
                                style={{width:'100px', boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
                                onChange={ onProductCountChange }
                                value= { product.count }
                                >
                                <ProductImage className='custom-image'/>
                                {/* <ProductTitle className='text-white' style={{fontSize:'8px'}}/> */}
                                <ProductButtons  className='custom-buttons' style={{display:'flex', justifyContent:"center"}}/>
                            </ProductCard>
                        ))
                    }

            </div>    
            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>

        </>
    )
}

export default ShoppingPage
