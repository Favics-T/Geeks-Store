import { useContext } from "react"
import Hero from "../Components/Hero"
import Product from "../Components/Product"
import { ProductContext } from "../Context/ProductContext"
import Features from "../Components/Features"


const Home = ()=>{

    const { products } = useContext(ProductContext);

    

    return(
        <div className=" ">
            <Hero />
            <Features />
           
           <section className="py-10">
            <div className="container mx-auto">
                <h1 className="text-center my-4   underline underline-offset-4 font-bodyFont text-[20px] font-semibold">New Arrival</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-sm 
                 md:max-w-none md:mx-0 lg:grid-cols-4 ">
                    {products.slice(0,8).map((product)=>{
                        return <Product className=" h-[300px] " key={product.id } product={product} >   </Product>
                          
                    })}
                    </div>
                      </div>   

           </section>
            </div>

        
    )
}
export default Home
