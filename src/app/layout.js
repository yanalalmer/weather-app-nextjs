import { RecoilRootWrapper } from '@/state';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Weather App - NextJs',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} bg-white text-black dark:bg-black dark:text-white main-transition`}
      >
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
