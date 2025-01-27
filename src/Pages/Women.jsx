import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";

const Women = () => {
  const { products } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter women's clothing
  const women = products.filter((item) => item.category === "women's clothing");

  return (
    <div className="my-10 px-4">
      <h1 className="text-center text-2xl font-bold mb-8">Women's Collection</h1>

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

        {/* Women's Clothing Section */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {women.length > 0 ? (
            women.map((item) => (
              <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
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
              No products available in this category.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Women;
