import './style.scss';
import React from 'react';

type InputProps = {
  setFilteredItem: React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({ setFilteredItem }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredItem(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Введите название для поиска..'
      onChange={handleChange}
      className='search-input' />
  );
};