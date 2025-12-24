import { Product } from "../../Models/Product";


export default  function Db(): Product[] {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys', 'Food', 'Beauty'];
  const products: Product[] = [];

  for (let i = 1; i <= 100; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      description: `This is a detailed description for Product ${i}. It features excellent quality and great value for money.`,
      price: parseFloat((Math.random() * 500 + 10).toFixed(2)),
      category: categories[Math.floor(Math.random() * categories.length)],
      stock: Math.floor(Math.random() * 100),
      imageUrl: `https://picsum.photos/seed/${i}/300/300`,
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1))
    });
  }

  return products;
}
