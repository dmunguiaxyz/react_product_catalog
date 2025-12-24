import './productFilters.css';

export default function ProductFilters(props: {
  handleCategoryChange?: (category: string) => void;
  handlePriceChange?: (priceRange: [number, number]) => void;
}) {
  const { handleCategoryChange, handlePriceChange } = props;
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          className="category-select"
          onChange={e =>
            handleCategoryChange && handleCategoryChange(e.target.value)
          }
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="home">Home & Garden</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price">Price: $0 - $1000</label>
        <input
          type="range"
          id="price"
          className="price-slider"
          min="0"
          max="1000"
          defaultValue="500"
          onMouseUp={e =>
            handlePriceChange &&
            handlePriceChange([0, Number(e.currentTarget.value)])
          }
        />
      </div>
    </div>
  );
}
