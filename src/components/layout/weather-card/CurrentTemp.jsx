'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';

export const CurrentTemp = () => {
  const weather = useRecoilValue(mainState);
  const { main, weather: weatherDetails } = weather.weather;

  return (
    <section className='flex items-center w-1/2 border-r-4'>
      <img
        src={`https://openweathermap.org/img/wn/${weatherDetails?.[0]?.icon}@4x.png`}
        alt='weather icon'
      />
      <div>
        <h1 className='text-6xl font-semibold mb-1'>
          {Math.round(main?.temp)}°
        </h1>
        <h3 className='text-2xl capitalize'>
          {weatherDetails?.[0]?.description}
        </h3>
      </div>
    </section>
  );
};
