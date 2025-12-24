import ProductList from "./Components/ProductList/ProductList";
import SearchBar from "./Components/SearchBar/searchBar";
import NavigationBar from "./Components/NavigationBar/navigationBar";
import { useState } from "react";
import ProductFilters from "./Components/ProductFilters/productFilters";

export default function App(){
    const [searchTerm, setSearchTerm] = useState("")
    const handleInputChange = (event: any) => {
        //this will trigger a re-render on each input change
        setSearchTerm(event.target.value);
    }
    const handleCataegoryChange = (category:string) => {
        //implement category filter logic here
        console.log("Selected category:", category);
    }
    const handlePriceChange = (priceRange:[number,number]) => {
        //implement price filter logic here
        console.log("Selected price range:", priceRange);
    }
    return (<> <div><NavigationBar></NavigationBar></div>
    <div>
        <ProductFilters handleCategoryChange={handleCataegoryChange} handlePriceChange={handlePriceChange}></ProductFilters>
    </div>
    <div>
        <SearchBar handleInputChange={handleInputChange}></SearchBar>
    </div>
    <div>
        <ProductList searchTerm={searchTerm}></ProductList>
    </div>
    </>);
}