import axios from 'axios';
import { ProductResponse } from '../../Models/Product';

export async function fetchProducts(props: {
  category: string;
  minPrice: number;
  maxPrice: number;
  pageNumber: number;
}): Promise<ProductResponse> {
  const { category, minPrice, maxPrice, pageNumber } = props;
  const url = 'http://localhost:5000/api/products';
  //add query parameters
  const queryParams: string[] = [];
  if (category && category.toLowerCase() !== 'all') {
    queryParams.push(`category=${encodeURIComponent(category)}`);
  }
  if (minPrice !== undefined) {
    queryParams.push(`minPrice=${minPrice}`);
  }
  if (maxPrice !== undefined) {
    queryParams.push(`maxPrice=${maxPrice}`);
  }
  if (pageNumber !== undefined) {
    queryParams.push(`pageNumber=${pageNumber}`);
  }
  const response = await axios.get(url + '?' + queryParams.join('&'));
  return response.data as ProductResponse;
}
