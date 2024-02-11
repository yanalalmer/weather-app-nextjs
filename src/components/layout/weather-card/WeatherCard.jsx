'use client';
import {
  Loading,
  MainDate,
  CurrentTemp,
  CurrentWeatherInfo,
} from '@/components';
import { useFetchWeather } from '@/hooks';
import { fetchWeather } from '@/api';

export const WeatherCard = () => {
  const cityName = 'london';
  // hook
  const { weather, loading, error, errorMessage } = useFetchWeather(
    fetchWeather,
    cityName
  );

  return (
    <div className='flex flex-wrap desktop:max-w-[1420px] desktop:my-4 desktop:mx-auto'>
      {loading && <Loading />}
      {error && <h1>{errorMessage}</h1>}
      {weather && (
        <>
          {/* main date */}
          <MainDate />
          {/* current data */}
          <section className='flex justify-center items-center w-full mt-16'>
            {/* current temp */}
            <CurrentTemp />
            {/* current info */}
            <CurrentWeatherInfo />
          </section>
          {/* rest of day data */}
          {/* <section className='w-full mt-16'>
            <h3>Today's weather</h3>
            <div className='flex justify-between items-center mt-8'>
              {dayDate.map((item, index) => (
                <div
                  key={index}
                  className='text-center bg-blue/70 p-8 rounded-md'
                >
                  <h3>{item.time}</h3>
                  <h3>{item.icon}</h3>
                  <h3>{item.temp}</h3>
                </div>
              ))}
            </div>
          </section> */}
        </>
      )}
    </div>
  );
};

const dayDate = [
  { time: '12:00', icon: 'cloudy', temp: '23°' },
  { time: '12:00', icon: 'cloudy', temp: '23°' },
  { time: '12:00', icon: 'cloudy', temp: '23°' },
  { time: '12:00', icon: 'cloudy', temp: '23°' },
  { time: '12:00', icon: 'cloudy', temp: '23°' },
  { time: '12:00', icon: 'cloudy', temp: '23°' },
  { time: '12:00', icon: 'cloudy', temp: '23°' },
];
