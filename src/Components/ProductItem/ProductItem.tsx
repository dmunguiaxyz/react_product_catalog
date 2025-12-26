import { Product } from '../../Models/Product';
import './ProductItem.css';

export default function ProductItem(props: { product: Product }) {
  const { product } = props;
  return (
    <li className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div className="product-info">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <span className="product-rating">⭐ {product.rating}</span>
          </div>
          <div className="product-stock">
            <span className={product.stockQuantity > 0 ? 'in-stock' : 'out-of-stock'}>
              {product.stockQuantity > 0 ? `${product.stockQuantity} in stock` : 'Out of stock'}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
