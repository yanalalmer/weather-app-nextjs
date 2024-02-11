'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';

export const CurrentTemp = () => {
  const weather = useRecoilValue(mainState);
  const cityWeather = weather.weather.list[0];

  return (
    <section className='flex items-center justify-center desktop:justify-start desktop:w-1/2 w-fit desktop:border-r-4 border-b-4 desktop:border-b-0 mb-12 desktop:mb-0'>
      <img
        src={`https://openweathermap.org/img/wn/${cityWeather?.weather[0]?.icon}@4x.png`}
        alt='weather icon'
      />
      <div>
        <h1 className='dekstop:text-6xl text-4xl font-semibold mb-1'>
          {Math.round(cityWeather?.main?.temp)}°
        </h1>
        <h3 className='desktop:text-2xl text-l capitalize'>
          {cityWeather?.weather[0]?.description}
        </h3>
      </div>
    </section>
  );
};
