import { Categories } from '../../Services/DataService/data.service';
import './productFilters.css';

export default function ProductFilters(props: {
  handleCategoryChange?: (category: string) => void;
  handlePriceChange?: (priceRange: [number, number]) => void;
}) {
  const { handleCategoryChange, handlePriceChange } = props;

  let filterOptions = Categories.map((category,index) => (
    <option key={`${category}-${index}`} value={category}>
      {category}
    </option>
  ));

  filterOptions.unshift(
    <option key={`all-categories`} value="all">
      All
    </option>
  );
  
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
          {filterOptions}
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
