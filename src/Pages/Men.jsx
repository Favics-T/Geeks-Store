import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";

const Men = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { products } = useContext(ProductContext);

  // Filter men's clothing
  const men = products.filter((product) => product.category === "men's clothing");

  return (
    <div className="my-10 px-4">
      <h1 className="text-center text-2xl font-bold mb-8">Men's Clothing</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Product Details Section */}
        <aside className="md:col-span-1">
          <h2 className="bg-black text-white text-center py-2 rounded-md font-bold mb-4">
            Product Details
          </h2>
          {selectedProduct ? (
            <div className="border border-blue-900 p-4 rounded-lg shadow-lg">
              <h1 className="font-bold text-lg mb-2">{selectedProduct.title}</h1>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full rounded-md mb-2"
              />
              <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
              <p className="font-bold">
                Price: <span className="text-green-600">${selectedProduct.price}</span>
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md w-full"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-500">Select a product to view details</p>
          )}
        </aside>

        {/* Men's Clothing Section */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {men.length > 0 ? (
            men.map((item) => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <Product product={item} />
                <button
                  className="bg-black text-white px-4 py-2 mt-4 rounded-md w-full"
                  onClick={() => setSelectedProduct(item)}
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products available.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Men;
