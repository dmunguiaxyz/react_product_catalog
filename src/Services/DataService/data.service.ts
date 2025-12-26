import { Categories } from '../../Constants/filter.constant';
import { Product } from '../../Models/Product';

export default function Db(): Product[] {

  const products: Product[] = [];

  for (let i = 1; i <= 100; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      description: `This is a detailed description for Product ${i}. It features excellent quality and great value for money.`,
      price: parseFloat((Math.random() * 500 + 10).toFixed(2)),
      //exclude 'All' from random category assignment
      category: Categories[Math.floor(Math.random() * (Categories.length))],
      stockQuantity: Math.floor(Math.random() * 100),
      imageUrl: `https://picsum.photos/seed/${i}/300/300`,
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
    });
  }

  return products;
}
