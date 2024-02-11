import { Button } from '@/components';

export const SearchBox = ({
  type = 'test',
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
