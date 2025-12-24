import { useState } from 'react';
import Db from '../../Services/DataService/data.service';
import Pagination from '../Pagination/pagination';
import ProductItem from '../ProductItem/ProductItem';

export default function ProductList(props: {
  searchTerm: string;
  filters: {
    category: string;
    priceRange: [number, number];
  };
}) {
  const { searchTerm, filters } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  let products = Db()
    .filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.category === 'all' || product.category === filters.category) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    )
    .map(product => {
      const itemKey = `${product.id}-${product.name}`;
      return <ProductItem key={itemKey} product={product}></ProductItem>;
    });
  const totalPages = Math.ceil(products.length / pageSize);
  products = products.slice(pageSize * (currentPage - 1), currentPage * pageSize);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }
  if (!products) {
    return <div>Loading products...</div>;
  }
  return (
    <>
      <Pagination pageSize={pageSize} totalPages={totalPages} handlePageChange={handlePageChange}></Pagination>
      <ul className="product-list">{products}</ul>
      <Pagination pageSize={pageSize} totalPages={totalPages} handlePageChange={handlePageChange}></Pagination>
    </>
  );
}
