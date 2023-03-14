import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


const product = {
    id:'01',
    title:'Coffee Mug',
    img:"./coffee-mug.png"
}
const product2 = {
    id:'02',
    title:'remera',
}

function ShoppingPage() {

    return (
        <>
       
        <div>
            <h1>Shoppping Page</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row'}}>
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title={'title'}/>
                    <ProductCard.Buttons />
                </ProductCard> 
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
           
        </div>
        </>
    )
}

export default ShoppingPage
