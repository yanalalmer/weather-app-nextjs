'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';
import {
  HumidityIcon,
  LowTempIcon,
  HighTempIcon,
  VisibilityIcon,
  WindIcon,
  PressureIcon,
} from '@/public/icons';

export const CurrentWeatherInfo = () => {
  const weather = useRecoilValue(mainState);
  const currentWeatherInfo = weather.weather.list[0];

  const data = [
    {
      value: Math.round(currentWeatherInfo?.main?.temp_max) + '°',
      label: 'High',
      icon: <HighTempIcon />,
    },
    {
      value: Math.round(currentWeatherInfo?.wind?.speed) + ' ' + 'Mph',
      label: 'Wind',
      icon: <WindIcon />,
    },
    {
      value: currentWeatherInfo?.main?.pressure + ' ' + 'hPa',
      label: 'pressure',
      icon: <PressureIcon />,
    },
    {
      value: Math.round(currentWeatherInfo?.main?.temp_min) + '°',
      label: 'Low',
      icon: <LowTempIcon />,
    },
    {
      value: currentWeatherInfo?.main?.humidity + '%',
      label: 'humidity',
      icon: <HumidityIcon />,
    },
    {
      value: Math.round(currentWeatherInfo?.visibility / 1000) + ' ' + 'km',
      label: 'visibility',
      icon: <VisibilityIcon />,
    },
  ];

  return (
    <section className='desktop:w-1/2 w-full grid grid-cols-3 grid-rows-2 gap-4 h-full'>
      {data.map((item, index) => (
        <div className='text-center' key={index}>
          <div className='font-bold'>{item?.value}</div>
          <div className='capitalize flex justify-center items-center flex-col'>
            <div className='w-6 fill-black dark:fill-white stroke-black dark:stroke-white main-transition'>
              {item?.icon}
            </div>
            <div>{item?.label}</div>
          </div>
        </div>
      ))}
    </section>
  );
};
