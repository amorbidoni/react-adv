import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";


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
                    initialValues={{count:4, maxCount:10}}>
                    {
                        ({  count,
                            isMaxCountReached,
                            product,
                            increaseBy,
                            reset }) => (
                            <>
                                <ProductImage/>
                                <ProductTitle />
                                <ProductButtons/>
                            </>
                        )
                    }

                </ProductCard>
                   
            </div>
        </div>

        </>
    )
}

export default ShoppingPage
