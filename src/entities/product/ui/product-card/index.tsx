import './style.scss';
import { FC } from 'react';
import { Product } from '@entities/product/ui/product-card-list';
import { AddToCardButton } from '@shared/buttons/add-to-card-button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {

  return (
    <>
      <div className='product'>

        <div className='product__img-container'>
          <img src={product.thumbnail} alt={product.title} className='product__img' />
        </div>

        <div className='product__title'>
          <h1>{product.title}</h1>
        </div>

        <div className='product__config'>
          <p>$ {product.price}</p>
          <AddToCardButton />
        </div>

      </div>
    </>
  );
};
