'use client';
import { Button } from '@/components';

export const SearchBox = ({
  type = 'text',
  placeholder = 'search city...',
  name = 'search',
}) => {
  return (
    <form className='flex items-center'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className='p-2 focus:outline-none rounded-l-md border-[1px] border-grey capitalize'
      />
      <Button />
    </form>
  );
};
