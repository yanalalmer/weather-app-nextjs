'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';
import { formatUnixTimeStamp } from '@/lib';

export const CurrentWeatherInfo = () => {
  const weather = useRecoilValue(mainState);
  const { main, wind, sys } = weather.weather;

  const data = [
    { value: Math.round(main?.temp_max) + '°', label: 'High' },
    { value: Math.round(wind?.speed) + ' ' + 'Mph', label: 'Wind' },
    { value: formatUnixTimeStamp(sys?.sunrise), label: 'Sunrise' },
    { value: Math.round(main?.temp_min) + '°', label: 'Low' },
    { value: main?.humidity + '%', label: 'Humidity' },
    { value: formatUnixTimeStamp(sys?.sunset), label: 'Sunset' },
  ];

  return (
    <section className='w-1/2 grid grid-cols-3 grid-rows-2 gap-4 h-full'>
      {data.map((item, index) => (
        <div className='flex justify-center items-center flex-col' key={index}>
          <div className='font-bold'>{item?.value}</div>
          <div>{item?.label}</div>
        </div>
      ))}
    </section>
  );
};
