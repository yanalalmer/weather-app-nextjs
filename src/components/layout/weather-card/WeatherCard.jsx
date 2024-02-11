'use client';
import { Loading, MainDate } from '@/components';
import { useFetchWeather } from '@/hooks';
import { fetchWeather } from '@/api';
import { formatUnixTimeStamp } from '@/lib';

export const WeatherCard = () => {
  const cityName = 'london';
  // hook
  const { weather, loading, error, errorMessage } = useFetchWeather(
    fetchWeather,
    cityName
  );
  const data = [
    { value: Math.round(weather?.main?.temp_max) + '°', label: 'High' },
    { value: Math.round(weather?.wind?.speed) + ' ' + 'Mph', label: 'Wind' },
    { value: formatUnixTimeStamp(weather?.sys?.sunrise), label: 'Sunrise' },
    { value: Math.round(weather?.main?.temp_min) + '°', label: 'Low' },
    { value: weather?.main?.humidity + '%', label: 'Humidity' },
    { value: formatUnixTimeStamp(weather?.sys?.sunset), label: 'Sunset' },
  ];

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
            <section className='flex items-center w-1/2 border-r-4'>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt='weather icon'
              />
              <div>
                <h1 className='text-6xl font-semibold mb-1'>
                  {Math.round(weather.main.temp)}°
                </h1>
                <h3 className='text-2xl capitalize'>
                  {weather.weather[0].description}
                </h3>
              </div>
            </section>
            {/* current info */}
            <section className='w-1/2 grid grid-cols-3 grid-rows-2 gap-4 h-full'>
              {data.map((item, index) => (
                <div
                  className='flex justify-center items-center flex-col'
                  key={index}
                >
                  <div className='font-bold'>{item.value}</div>
                  <div>{item.label}</div>
                </div>
              ))}
            </section>
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
