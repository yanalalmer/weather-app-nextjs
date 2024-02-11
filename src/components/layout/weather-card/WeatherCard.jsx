'use client';
import { fetchWeather } from '@/api';
import { useFetchWeather } from '@/hooks';

export const WeatherCard = () => {
  const { weather, loading, error, errorMessage } = useFetchWeather(
    fetchWeather,
    'london'
  );
  console.log(weather);
  return <div>weather card</div>;
};
