'use client';
// state
import { useRecoilValue } from 'recoil';
import { cityState } from '@/state';
// components
import {
  Loading,
  MainDate,
  CurrentTemp,
  CurrentWeatherInfo,
  DayWeatherInfo,
  WeekWeatherInfo,
} from '@/components';
// hook and api
import { useFetchWeather } from '@/hooks';
import { fetchWeather } from '@/api';

export const WeatherCard = () => {
  const city = useRecoilValue(cityState);

  // hook
  const { weather, loading, error, errorMessage } = useFetchWeather(
    fetchWeather,
    city
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
          {/* 7 days forecast data */}
          <WeekWeatherInfo />
        </>
      )}
    </div>
  );
};
