import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import '../styles/custom-styles.css';


const product = products[0]

function ShoppingPage() {

    
    return (
        <>
        <div>
            <h1>Shoppping Page</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row'}}>
                
                <ProductCard 
                    product={ product }  
                    className="bg-dark text-bold"
                    initialValues={{count:4, maxCount:10}}>
                    {
                        ({  count,
                            isMaxCountReached,
                            product,
                            increaseBy,
                            reset }) => (
                            <>
                                <ProductImage className='custom-image'/>
                                <ProductTitle className='text-white'/>
                                <ProductButtons  className='custom-buttons'/>
                                <button onClick={reset}>reset</button>
                                {!isMaxCountReached && <button onClick={()=> increaseBy(2)}>+2</button>}
                                <button onClick={()=> increaseBy(-2)}>-2</button>
                                <span>{count}</span>
                            </>
                        )
                    }

                </ProductCard>
                   
            </div>
            {/* <div className="shopping-cart">
        
                <ProductCard 
                    product={ product }  
                    className="bg-dark text-bold" 
                    style={{width:'100px', boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
                    >
                    <ProductImage className='custom-image'/>
                    <ProductButtons  className='custom-buttons' style={{display:'flex', justifyContent:"center"}}/>
                </ProductCard>

            </div>     */}
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
