import { useReducer, useState } from 'react';
import ProductList from './Components/ProductList/ProductList';
import NavigationBar from './Components/NavigationBar/navigationBar';
import ProductFilters from './Components/ProductFilters/productFilters';
import SearchBar from './Components/SearchBar/SearchBar';
import filterReducer from './Reducers/filter.reducer';

export default function App() {
  const [filters,dispatchFilter] = useReducer(filterReducer, {category: 'all', priceRange: [0, 1000], searchTerm: ''});

  const handleInputChange = (event: any) => {
    dispatchFilter({type: 'SET_SEARCH_TERM', payload: event.target.value});
  };
  const handleCataegoryChange = (category: string) => {
    dispatchFilter({type: 'SET_CATEGORY', payload: category});
    
  };
  const handlePriceChange = (priceRange: [number, number]) => {
    dispatchFilter({type: 'SET_PRICE_RANGE', payload: priceRange});
  };
  
  return (
    <>
      <div>
        <NavigationBar></NavigationBar>
      </div>
      <div>
        <ProductFilters
          handleCategoryChange={handleCataegoryChange}
          handlePriceChange={handlePriceChange}
        ></ProductFilters>
      </div>
      <div>
        <SearchBar handleInputChange={handleInputChange}></SearchBar>
      </div>
      <div>
        <ProductList
          filters={filters}
        ></ProductList>
      </div>
    </>
  );
}
