import { useContext, useMemo, useState } from "react"
import { ProductContext } from "../Context/ProductContext"
import Product from "../Components/Product";

const Women = ()=>{
    const { products } = useContext(ProductContext);
    const [productDetails, setProductDetails] = useState('');
    const [view,setView] = useState(false);
    const women = products.filter((womens)=>{
        return womens.category === "women's clothing"
    })

    const productView = useMemo(() => {
        return products.filter((item) => productDetails && item.id === productDetails);
    }, [products, productDetails]);



    
    return(
       <div className="my-10">
        <div>
        <h1 className="buttons text-center font-bodyFont font-semibold">Womens Collection</h1>
        </div>


         <div className="grid grid-cols-4 pb-20 py-10">
{/* Product Details Section */}

<div className=" border ">
        <h1 className="bg-black my-4 mx-4 rounded-xl text-center text-white font-bold">Product Details</h1>

        <div>
        {!view || productView.length === 0 ? (
                        <p className="text-center text-gray-500">
                          View Product Details
                        </p>
                    ) : 
                    (
                        <div className="border border-blue-900 py-4 px-4 mx-10 rounded-lg shadow-lg">
                            <h1 className="font-bold text-lg py-2">{productView[0].title}</h1>
                            <img
                                src={productView[0].image}
                                alt="Product"
                                className="py-2"
                            />
                            <p className="font-bodyFont text-[9px] hover:text-[20px] font-light">
                                {productView[0].description}
                            </p>
                            <p>
                                <span className="font-bold">Price:</span> ${productView[0].price}
                            </p>
                            <button
                                className="bg-red-500 text-white relative  px-2 py-2  mt-4 rounded-lg"
                                onClick={() => setView(false)}
                            >
                                Close
                            </button>
                        </div>
                    )}
        </div>
</div>





<div className=" col-span-2  px-10 grid grid-cols-3 gap-14  mx-24 w-[800px]">
    {
        women.map((womenItem)=>{
            return( 
                <div key={womenItem.id}>
 <Product product={womenItem} key={womenItem.id}/>

 <button  
 onClick={()=> {setProductDetails(womenItem.id);
     setView(true)}}
 className="w-full bg-black text-white px-2 py-2 my-1 rounded-lg">View</button>
                </div>
            
           )
        })
    }
</div>

</div>
       </div>
    )
}
export default Women