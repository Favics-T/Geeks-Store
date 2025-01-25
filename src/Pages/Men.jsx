import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";

const Men = () => {
    const [productDetails, setProductDetails] = useState("");
    const [view, setView] = useState(false);

    const { products } = useContext(ProductContext);

    // Filter men's clothing
    const men = products.filter((mens) => mens.category === "men's clothing");

    // Memoized product details
    const personalView = useMemo(() => {
        return products.filter((item) => productDetails && item.id === productDetails);
    }, [products, productDetails]);

    return (
        <div className="my-10">
            <div>
                <h1 className="text-center buttons font-bodyFont font-semibold">Men's Clothing</h1>
            </div>
            <div className="grid grid-cols-4 pb-20 py-10 h-[150vh] ">
            {/* Product Details Section */}
            <section>
                <h2 className="bg-black my-4 mx-4 rounded-xl text-center text-white font-bold">
                    Product Details
                </h2>
                <div>
                    {!view || personalView.length === 0 ? (
                        <p className="text-center text-gray-500">
                          View Product Details
                        </p>
                    ) : 
                    (
                        <div className="border border-blue-900 py-4 px-4 mx-10 rounded-lg shadow-lg">
                            <h1 className="font-bold text-lg py-2">{personalView[0].title}</h1>
                            <img
                                src={personalView[0].image}
                                alt="Product"
                                className="py-2"
                            />
                            <p className="font-bodyFont text-[9px] hover:text-[20px] font-light">
                                {personalView[0].description}
                            </p>
                            <p>
                                <span className="font-bold">Price:</span> ${personalView[0].price}
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
            </section>

            {/* Men's Clothing Section */}
            <section className="col-span-3 grid grid-cols-4 gap-14 my-8 mx-8">
                            
                {men.map((menItem) => (
                    
                        <div key={menItem.id} className="h-8">
                      
                        <Product product={menItem} />
                        <button
                            className="bg-black w-full text-white px-2 py-2 my-1 rounded-lg"
                            onClick={() => {
                                setView(true);
                                setProductDetails(menItem.id);
                            }}
                        >
                            View
                        </button>
                    </div>
                    
                ))}
            </section>
        </div>
    
        </div>


);
};

export default Men;
