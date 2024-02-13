'use client';
import { useState } from 'react';
// state
import { useRecoilState } from 'recoil';
import { cityState } from '@/state';
// components
import { Button } from '@/components';

export const SearchBox = ({
  type = 'text',
  placeholder = 'search city...',
  name = 'search',
}) => {
  const [city, setCity] = useRecoilState(cityState);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form className='flex items-center' onSubmit={handleSubmit}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className='p-2 focus:outline-none rounded-l-md border-[1px] border-grey capitalize text-black'
        onChange={handleChange}
      />
      <Button />
    </form>
  );
};
