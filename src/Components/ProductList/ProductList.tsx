import Db from "../../Services/DataService/data.service";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductList(props:{searchTerm:string,filters:{
    category:string, priceRange:[number,number]
}}){
    const {searchTerm, filters} = props;
    const products = Db().filter(product=>product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    && (filters.category ==="all" || product.category === filters.category)
    && (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
).map(product=>{
        const itemKey = `${product.id}-${product.name}`
        return <ProductItem key={itemKey} product={product}></ProductItem>
    });
    if(!products){
        return <div>Loading products...</div>;
    }
    return(
        <ul className="product-list">
            {products}
        </ul>
    );
}