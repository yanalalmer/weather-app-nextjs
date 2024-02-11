'use client';
import { SunIcon, MoonIcon } from '@/public/icons';

// main button
export const Button = ({ type = 'submit', text = 'submit' }) => {
  return (
    <button
      type={type}
      className='bg-blue p-2 text-white font-bold rounded-r-md border-[1px] border-blue tablet:flex hidden capitalize'
    >
      {text}
    </button>
  );
};
// toggle theme button
export const ThemeToggleButton = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div
      className='rounded-[200px] flex justify-between items-center cursor-pointer w-fit main-transition'
      onClick={toggleTheme}
    >
      <span className='w-8 h-8 block dark:hidden main-transition'>
        <SunIcon />
      </span>
      <span className='w-8 h-8 hidden dark:block main-transition'>
        <MoonIcon />
      </span>
    </div>
  );
};
