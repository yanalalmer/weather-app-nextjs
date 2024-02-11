'use client';
import { fetchWeather } from '@/api';
import { useEffect } from 'react';
import { Navbar, Container } from '@/components';

export default function Home() {
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <main>
      <Container>
        <Navbar />
      </Container>
    </main>
  );
}
