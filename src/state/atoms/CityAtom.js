'use client';
import { atom } from 'recoil';

export const cityState = atom({
  key: 'cityState',
  default: 'amsterdam',
});
