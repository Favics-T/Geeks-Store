import React from 'react'

const SearchContext = () => {

    const filteredProducts = products.filter((item) => {
        return (
            (selectedCategory ? item.category === selectedCategory : true) &&
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    
  return (
    
    <div>
      
    </div>
  )
}

export default SearchContext
