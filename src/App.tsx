import { useState } from 'react';
import ProductList from './Components/ProductList/ProductList';
import NavigationBar from './Components/NavigationBar/navigationBar';
import ProductFilters from './Components/ProductFilters/productFilters';
import SearchBar from './Components/SearchBar/SearchBar';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 1000]);
  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const handleCataegoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const handlePriceChange = (priceRange: [number, number]) => {
    setSelectedPriceRange(priceRange);
  };
  return (
    <>
      {' '}
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
          searchTerm={searchTerm}
          filters={{
            category: selectedCategory,
            priceRange: selectedPriceRange,
          }}
        ></ProductList>
      </div>
    </>
  );
}
