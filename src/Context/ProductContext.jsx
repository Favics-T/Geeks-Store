import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

// Create ProductContext
export const ProductContext = createContext();

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="h-[100vh] flex items-center justify-center bg-black">
    <div className="w-24 h-24 border-[10px] border-blue-500 border-t-black border-b-black rounded-full animate-spin"></div>
    <h2 className="text-white font-bold text-3xl ml-4">Geeks</h2>
  </div>
);

const ProductProvider = ({ children }) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  // Handle loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Handle error state
  if (isError) {
    return (
      <div className="h-[100vh] flex items-center justify-center bg-red-100">
        <h2 className="text-red-500 font-bold text-xl">
          Error: {error?.message || "Something went wrong"}
        </h2>
      </div>
    );
  }

  // Provide product data
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
