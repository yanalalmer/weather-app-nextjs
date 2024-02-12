'use client';
import { useRecoilValue } from 'recoil';
import { WeatherIcon, SectionTitle } from '@/components';
import { mainState } from '@/state';

export const WeekWeatherInfo = () => {
  const weather = useRecoilValue(mainState);
  return (
    <section className='w-full mt-16'>
      <SectionTitle text='Next 7 days' />
    </section>
  );
};
