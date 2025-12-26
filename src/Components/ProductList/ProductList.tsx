import { useEffect, useState } from 'react';
import  { fetchProducts } from '../../Services/DataService/data.service';
import Pagination from '../Pagination/pagination';
import ProductItem from '../ProductItem/ProductItem';
import { ProductDataResponseMetadata } from '../../Models/Product';

export default function ProductList(props: {
  
  filters: {
    category: string;
    priceRange: [number, number];
    searchTerm: string;
  };
}) {
  const { filters } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [products,setProducts] = useState<any[]>([])
  const [productData, setProductData] = useState<ProductDataResponseMetadata>({
    pageNumber: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0,
    hasPreviousPage: false,
    hasNextPage: false,
  });

  useEffect(()=>{
    fetchProducts({category:filters.category, minPrice:filters.priceRange[0], maxPrice:filters.priceRange[1], pageNumber:currentPage}).then(data=>{
      const items = data.items.map(product => {
      const itemKey = `${product.id}-${product.name}`;
      return <ProductItem key={itemKey} product={product}></ProductItem>;
    });
      setProducts(items);
      setProductData({
        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalCount: data.totalCount,
        totalPages: data.totalPages,
        hasPreviousPage: data.hasPreviousPage,
        hasNextPage: data.hasNextPage,
      });
    })
    .catch(err=>{
      console.error('Error fetching products:', err);
    });
  }, [filters, currentPage]);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }
  if (!products) {
    return <div>Loading products...</div>;
  }
  return (
    <>
      <Pagination  totalPages={productData.totalPages} handlePageChange={handlePageChange}></Pagination>
      <ul className="product-list">{products}</ul>
      <Pagination totalPages={productData.totalPages} handlePageChange={handlePageChange}></Pagination>
    </>
  );
}
