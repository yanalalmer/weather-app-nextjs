import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mainState } from '@/state';

export const useFetchWeather = (fetch, cityName) => {
  const [state, setState] = useRecoilState(mainState);

  const runFetch = () => {
    if (!fetch) return;
    setState((s) => ({ ...s, loading: true }));
    fetch(cityName)
      .then((data) => {
        setState((s) => ({
          ...s,
          weather: data,
          loading: false,
          error: false,
          errorMessage: '',
        }));
      })
      .catch((err) => {
        setState((s) => ({
          ...s,
          weather: null,
          loading: false,
          error: true,
          errorMessage: err.message || 'failed to fetch',
        }));
      });
  };

  useEffect(runFetch, [cityName]);
  return { ...state, refetch: runFetch };
};
