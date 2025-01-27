import { createContext } from "react"
import { useQuery } from '@tanstack/react-query'

export const ProductContext = createContext();

const LoadingSpinner = () => (
    <div className="h-[120vh] relative bg-black">
        <div className="bg-black w-[170px] h-0 rounded-full border-[15px] border-yellow-500 border-t-[5px] border-t-black border-b-[10px] border-b-black border-r-[15px] border-r-[#3c4bad] text-black animate-ani absolute top-[40%] left-[50%]">
            <h2 className="text-white font-logoFont0 text-[50px]">Geeks</h2>
        </div>
    </div>
);


const ProductProvider = ({ children })=>{

   const {data: products= [], isPending , error } = useQuery({
    queryKey : ['products'],
    queryFn: ()=> 
        fetch('https://fakestoreapi.com/products').then((res)=> res.json()),
   })

//    if(isPending){
//     return(
//         <div>

//             <LoadingSpinner />
//            <div className="h-[120vh] relative bg-black ">
//            <div class="bg-black w-[170px] h-0 rounded-full border-[15px] border-yellow-500
//             border-t-[5px] border-t-black border-b-[10px] border-b-black border-r-[15px] border-r-[#3c4bad]
//              text-black animate-ani absolute top-[40%] left-[50%] ">

//                 <h2 className="text-white font-logoFont0 text-[50px] ">Geeks</h2>
//             </div>
//            </div>

//         </div>
//     )
//    }

//    if(error){
//     return(
//         <h2>Error :{error.message}</h2>
//     )
//    }

   

    return(
        <div >
            <ProductContext.Provider value={{ products }}>
                {children} 
            </ProductContext.Provider>

        </div>
    )
}
export default ProductProvider