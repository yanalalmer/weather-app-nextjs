'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';
import { formatDate } from '@/lib';

export const MainDate = () => {
  const weather = useRecoilValue(mainState);
  const cityInfo = weather?.weather?.city;
  // formatting data
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return (
    <section className='w-full p-3'>
      <h2 className='desktop:text-5xl text-3xl font-semibold'>
        {cityInfo?.name}, {cityInfo?.country}
      </h2>
      <h3 className='desktop:text-2xl text-l'>{formattedDate}</h3>
    </section>
  );
};
