import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

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
                <ProductCard product={ product } className="bg-dark text-bold">
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title title={'title'}  className='text-white'/>
                    <ProductCard.Buttons />
                </ProductCard> 
                <ProductCard product={ product }  className="bg-dark text-bold">
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-white'/>
                    <ProductButtons  className='custom-buttons'/>
                </ProductCard>
                <ProductCard product={ product } style={{backgroundColor: '#70D1F8'}} >
                    <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductTitle  style={{fontWeight:700}}/>
                    <ProductButtons  style={{display:'flex', justifyContent:'flex-end'}}/>
                </ProductCard>
            </div>
        </div>
        </>
    )
}

export default ShoppingPage
