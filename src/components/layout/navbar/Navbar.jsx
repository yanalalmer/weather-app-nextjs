export const Navbar = () => {
  return (
    <nav className='w-full flex items-center tablet:justify-between justify-center gap-3 px-3 py-3 rounded-2xl'>
      <div>navlogo</div>
      <div className='flex items-center gap-3 relative'>
        <div>searchbox</div>
        <div>toggle button</div>
      </div>
    </nav>
  );
};