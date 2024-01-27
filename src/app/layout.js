import './globals.css';
import { Press_Start_2P } from 'next/font/google';

export const metadata = {
  title: 'Date me',
  description: 'App to ask your date to be your girlfriend',
};

const press_start_2p = Press_Start_2P({
  subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext'],
  display: 'swap',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang='en' className={press_start_2p.className}>
      <body>{children}</body>
    </html>
  );
}
