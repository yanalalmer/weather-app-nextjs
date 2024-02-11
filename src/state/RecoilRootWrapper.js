'use client';
import { RecoilRoot } from 'recoil';

export const RecoilRootWrapper = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
