export const Loading = () => {
  return (
    <div class='flex justify-center items-center flex-col bg-white h-screen w-full dark:bg-black z-10 fixed top-0 left-0'>
      <div className='flex space-x-2 justify-center items-center mb-4'>
        <div class='h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div class='h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div class='h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce'></div>
      </div>
      <h1 class='block text-4xl font-bold'>Loading...</h1>
    </div>
  );
};
