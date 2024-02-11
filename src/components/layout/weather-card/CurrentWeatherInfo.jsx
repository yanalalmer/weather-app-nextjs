'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';
import { formatUnixTimeStamp } from '@/lib';

export const CurrentWeatherInfo = () => {
  const weather = useRecoilValue(mainState);
  const currentWeatherInfo = weather.weather.list[0];

  const data = [
    {
      value: Math.round(currentWeatherInfo?.main?.temp_max) + '°',
      label: 'High',
    },
    {
      value: Math.round(currentWeatherInfo?.wind?.speed) + ' ' + 'Mph',
      label: 'Wind',
    },
    {
      value: currentWeatherInfo?.main?.pressure + ' ' + 'hPa',
      label: 'pressure',
    },
    {
      value: Math.round(currentWeatherInfo?.main?.temp_min) + '°',
      label: 'Low',
    },
    { value: currentWeatherInfo?.main?.humidity + '%', label: 'humidity' },
    {
      value: Math.round(currentWeatherInfo?.visibility / 1000) + ' ' + 'km',
      label: 'visibility',
    },
  ];

  return (
    <section className='desktop:w-1/2 w-full grid grid-cols-3 grid-rows-2 gap-4 h-full'>
      {data.map((item, index) => (
        <div className='flex justify-center items-center flex-col' key={index}>
          <div className='font-bold'>{item?.value}</div>
          <div className='capitalize'>{item?.label}</div>
        </div>
      ))}
    </section>
  );
};
