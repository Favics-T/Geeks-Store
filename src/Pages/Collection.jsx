import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";
import { MdClear } from "react-icons/md";

const Collection = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on selected category and search term
  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = searchTerm
      ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  // Extract unique categories dynamically
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div className="flex flex-col md:flex-row gap-6 my-8 px-4">
      {/* Sidebar */}
      <aside className="md:w-1/4 p-4 border border-gray-300 rounded-lg bg-gray-50">
        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search products"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              aria-label="Clear search"
            >
              <MdClear />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <ul className="space-y-2">
          <li
            className={`cursor-pointer ${selectedCategory === "" ? "font-bold text-blue-500 " : ""}`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                selectedCategory === category ? "font-bold text-blue-500" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        <h1 className="text-center text-2xl font-semibold mb-4">Our Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <Product product={item} key={item.id} />)
          ) : (
            <div className="col-span-full flex flex-col items-center text-gray-500">
              <p className="text-lg">No products found. Try a different search or category.</p>
              <img
                src="/images/no-products-found.svg"
                alt="No products"
                className="w-1/2 mt-4"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collection;
