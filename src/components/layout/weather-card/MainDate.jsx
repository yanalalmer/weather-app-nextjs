'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';
import { formatDate } from '@/lib';

export const MainDate = () => {
  const weather = useRecoilValue(mainState);
  const { name, sys } = weather.weather;
  // formatting data
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return (
    <section className='w-full p-3'>
      <h2 className='text-5xl font-semibold'>
        {name}, {sys?.country}
      </h2>
      <h3 className='text-2xl'>{formattedDate}</h3>
    </section>
  );
};
