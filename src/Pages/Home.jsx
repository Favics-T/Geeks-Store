import { useContext } from "react"
import Hero from "../Components/Hero"
import Product from "../Components/Product"
import { ProductContext } from "../Context/ProductContext"


const Home = ()=>{

    const { products } = useContext(ProductContext);

    

    return(
        <div>
            <Hero />
           {
            products.slice(0,2).map((product)=>{
                return(
                    
                    <div className="grid grid-cols-4">
<Product product={product} key={product.id} />
                        </div>

                    
                )
            })
           }
        </div>
    )
}
export default Home