import Image from 'next/image';

export const NavbarLogo = () => {
  return (
    <div className='w-16 logo cursor-pointer flex'>
      <Image
        src={'/images/logo.png'}
        width={500}
        height={500}
        className='rounded-3xl shadow-white-lg'
        alt='logo'
        priority
      />
      <p className='ml-4 font-bold hidden tablet:block'>Weather App</p>
    </div>
  );
};
