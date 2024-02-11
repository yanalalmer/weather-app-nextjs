import Link from 'next/link';
import { NavbarLogo, SearchBox, ThemeToggleButton } from '@/components';

export const Navbar = () => {
  return (
    <nav className='w-full flex items-center tablet:justify-between justify-center gap-3 px-3 py-3 rounded-2xl'>
      <Link href='/'>
        <NavbarLogo />
      </Link>
      <div className='flex items-center gap-3 relative'>
        <SearchBox />
        <ThemeToggleButton />
      </div>
    </nav>
  );
};
