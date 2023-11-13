import { Search } from '@entities/search';
import { ProductCardList } from '@entities/product/ui/product-card-list';
import { useState } from 'react';
import { Loader } from '@shared/loader';
import { useFetchData } from '@src/features/fetch-data';

export const ProductListPage = () => {
  const [filteredItem, setFilteredItem] = useState('');
  const URL = 'https://dummyjson.com/products';
  const { data: products, isLoading, error } = useFetchData(URL);

  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <div className='loader-container'>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && (
        <>
          <Search setFilteredItem={setFilteredItem} />
          <ProductCardList products={products} filteredItem={filteredItem} />
        </>
      )
      }
    </div>
  );
};