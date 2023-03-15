import { Product } from "../interfaces/interfaces"

const product1 = {
    id:'01',
    title:'Coffee Mug',
    img:"./coffee-mug.png"
}
const product2 = {
    id:'02',
    title:'Coffe Mug Meme',
    img:"./coffee-mug2.png"
}
export const products: Product[] = [
    product1, product2
]