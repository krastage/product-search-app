import './style.scss';
import { SearchButton } from '@shared/ui/buttons/search-button';
import { Input } from 'src/shared/ui/inputs';
import React from 'react';

type SearchProps = {
  setFilteredItem: React.Dispatch<React.SetStateAction<string>>
}
export const Search = ({ setFilteredItem }: SearchProps) => {
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()} className='search-form'>
        <div className='search-form__container'>
          <Input setFilteredItem={setFilteredItem} />
          <SearchButton />
        </div>
      </form>
    </>

  );
};