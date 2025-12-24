import ProductList from "./Components/ProductList/ProductList";
import SearchBar from "./Components/SearchBar/searchBar";
import NavigationBar from "./Components/NavigationBar/navigationBar";
import { useState } from "react";

export default function App(){
    const [searchTerm, setSearchTerm] = useState("")
    const handleInputChange = (event: any) => {
        //this will trigger a re-render on each input change
        setSearchTerm(event.target.value);
    }
    return (<> <div><NavigationBar></NavigationBar></div>
    <div>
        <SearchBar handleInputChange={handleInputChange}></SearchBar>
    </div>
    <div>
        <ProductList searchTerm={searchTerm}></ProductList>
    </div>
    </>);
}