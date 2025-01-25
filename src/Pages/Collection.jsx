import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";
import { MdClear } from "react-icons/md";

const Collection = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = searchTerm
      ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="grid grid-cols-4 my-8 border border-black">
      <div className="mt-24 px-8">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border w-full px-4 py-2 border-black rounded-2xl"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
             <MdClear />
            </button>
          )}
        </div>
        <h1
          className={`cols cursor-pointer ${selectedCategory === "men's clothing" ? "font-bold text-blue-500" : ""}`}
          onClick={() => handleSelectedCategory("men's clothing")}
        >
          Men
        </h1>
        <h1
          className={`cols cursor-pointer ${selectedCategory === "women's clothing" ? "font-bold text-blue-500" : ""}`}
          onClick={() => handleSelectedCategory("women's clothing")}
        >
          Women
        </h1>
        <h1
          className={`cols cursor-pointer ${selectedCategory === "electronics" ? "font-bold text-blue-500" : ""}`}
          onClick={() => handleSelectedCategory("electronics")}
        >
          Electronics
        </h1>
        <h1
          className={`cols cursor-pointer ${selectedCategory === "jewelery" ? "font-bold text-blue-500" : ""}`}
          onClick={() => handleSelectedCategory("jewelery")}
        >
          Jewelery
        </h1>
        <h1
          className={`cols cursor-pointer ${selectedCategory === "" ? "font-bold text-blue-500" : ""}`}
          onClick={() => handleSelectedCategory("")}
        >
          All
        </h1>
      </div>
      <div className="border-8 col-span-3">
        <div>
          <h1 className="mx-auto my-[20px] w-40 text-[20px] font-bold text-center">Our Collections</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 my-8 mx-14">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <Product product={item} key={item.id} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No products found. Try a different search or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
