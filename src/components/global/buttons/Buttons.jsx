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
