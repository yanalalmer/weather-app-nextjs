'use client';
import { useRecoilValue } from 'recoil';
import { mainState } from '@/state';
import { formatTime } from '@/lib';

export const DayWeatherInfo = () => {
  const weather = useRecoilValue(mainState);
  const dayDate = weather.weather.list;

  return (
    <section className='w-full mt-16'>
      <h3>Today's weather</h3>
      <div className='flex items-center mt-4 space-x-8 cursor-grab overflow-x-scroll'>
        {dayDate.map((item, index) => (
          <div
            key={index}
            className='text-center desktop:p-8 p-6 desktop:min-w-40 tablet:min-w-32 min-w-28 rounded-md no-select'
          >
            <h3>{formatTime(item.dt_txt)}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt='weather icon'
              className='no-select'
            />
            <h3>{Math.round(item.main.temp)}°</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
