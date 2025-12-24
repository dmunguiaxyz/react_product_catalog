import Db from "../../Services/DataService/data.service";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductList(){
    const products = Db().map(product=>{
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