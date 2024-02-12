'use client';
import { atom } from 'recoil';

export const mainState = atom({
  key: 'mainState',
  default: {
    weather: null,
    loading: true,
    error: false,
    errorMessage: '',
  },
});
