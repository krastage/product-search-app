import './style.scss';
import { ProductCard } from '@entities/product';

export interface Product {
  thumbnail: string;
  title: string;
  price: number;
}

type ProductCardListProps = {
  products: Product[];
  filteredItem: string;
}

export const ProductCardList = ({ products, filteredItem }: ProductCardListProps) => {
  const filteredProducts = products.filter((product) => (
    filteredItem
      ? product.title.toLowerCase().includes(filteredItem.toLowerCase())
      : true
  ));

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div className='loader-container'>
          <p>Товары не найдены</p>
        </div>
      ) : (
        <ul className='product-list'>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};