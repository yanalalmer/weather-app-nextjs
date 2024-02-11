'use client';
import { useFetchWeather } from '@/hooks';
import { Navbar, Container } from '@/components';
import { fetchWeather } from '@/api';

export default function Home() {
  const { weather, loading, error, errorMessage } = useFetchWeather(
    fetchWeather,
    'london'
  );
  console.log(weather);
  return (
    <main>
      <Container>
        <Navbar />
      </Container>
    </main>
  );
}
