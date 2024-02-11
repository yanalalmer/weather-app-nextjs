'use client';
import {
  Loading,
  MainDate,
  CurrentTemp,
  CurrentWeatherInfo,
  DayWeatherInfo,
} from '@/components';
import { useFetchWeather } from '@/hooks';
import { fetchWeather } from '@/api';

export const WeatherCard = () => {
  const cityName = 'madrid';
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
          <section className='flex justify-center items-center desktop:flex-row flex-col w-full mt-16'>
            {/* current temp */}
            <CurrentTemp />
            {/* current info */}
            <CurrentWeatherInfo />
          </section>
          {/* rest of day data */}
          <DayWeatherInfo />
        </>
      )}
    </div>
  );
};
