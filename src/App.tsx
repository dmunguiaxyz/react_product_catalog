import ProductList from "./Components/ProductList/ProductList";
import { useState } from "react";
import SearchBar from "./Components/SearchBar/searchBar";

export default function App(){
    const [searchTerm, setSearchTerm] = useState("")
    const handleInputChange = (event: any) => {
        //this will trigger a re-render on each input change
        setSearchTerm(event.target.value);
    }
    return (<> <h1>Welcome to the Product Catalog App</h1>
    <div>
        <SearchBar handleInputChange={handleInputChange}></SearchBar>
    </div>
    <div>
        <ProductList searchTerm={searchTerm}></ProductList>
    </div>
    </>);
}