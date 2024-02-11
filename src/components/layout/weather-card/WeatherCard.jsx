'use client';
import { fetchWeather } from '@/api';
import { useFetchWeather } from '@/hooks';

export const WeatherCard = () => {
  const cityName = 'amsterdam';
  const { weather, loading, error, errorMessage } = useFetchWeather(
    fetchWeather,
    cityName
  );
  console.log(weather);
  return <div>weather card</div>;
};
