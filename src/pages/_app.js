import React from 'react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import '../app/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noChrome = Component?.noChrome || router.pathname === '/login';

  return (
    <ThemeProvider attribute="class">
      {noChrome ? (
        <Component {...pageProps} />
      ) : (
        <div>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
