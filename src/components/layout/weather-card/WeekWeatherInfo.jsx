'use client';
import { useRecoilValue } from 'recoil';
import { WeatherIcon, SectionTitle } from '@/components';
import { mainState } from '@/state';
import { formatDateTimeStamp } from '@/lib';

export const WeekWeatherInfo = () => {
  const weather = useRecoilValue(mainState);
  //   extracting weather list that doesnt include today's weather
  // extracitng dates
  const uniqueDates = [
    ...new Set(
      weather?.weather?.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split('T')[0]
      )
    ),
  ];
  // extracitng data for those dates
  const firstDataForEachDate = uniqueDates.map((date) => {
    return weather?.weather?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split('T')[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });

  return (
    <section className='w-full mt-16'>
      <SectionTitle text='Next 7 days' />
      <table className='w-full whitespace-nowrap border-t'>
        <tbody>
          {firstDataForEachDate.map(
            (day, index) =>
              day && (
                <tr key={index} className='border-b'>
                  <td className='pl-8'>{formatDateTimeStamp(day?.dt_txt)}</td>
                  <td>
                    <WeatherIcon
                      iconname={day?.weather[0].icon}
                      className='h-16 w-16'
                    />
                  </td>
                  <td className='tablet:hidden table-cell'>
                    {Math.round(day?.main?.temp)}°C
                  </td>
                  <td className='hidden tablet:table-cell'>
                    {Math.round(day?.main?.temp_min)}°C
                    <div className='opacity-60'>Low</div>
                  </td>
                  <td className='hidden tablet:table-cell'>
                    {Math.round(day?.main?.temp_max)}°C
                    <div className='opacity-60'>High</div>
                  </td>
                  <td className='hidden tablet:table-cell'>
                    {Math.round(day?.wind?.speed)}mph
                    <div className='opacity-60'>Wind</div>
                  </td>
                  <td className='hidden tablet:table-cell'>
                    {day?.main?.humidity}%
                    <div className='opacity-60'>Humidity</div>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </section>
  );
};
