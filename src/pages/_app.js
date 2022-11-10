import 'src/styles/globals.css';
import { useRouter } from 'next/router';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Providers from 'src/providers';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeaderFooter = [
    '/access-denied',
    '/404',
    '/500',
    '/sign-in',
    '/forgot-password',
    '/reset-password',
    '/auth',
  ].includes(router.pathname);
  return (
    <Providers pageProps={pageProps}>
      {!showHeaderFooter && <Header light={2} dark={2} />}
      <Component {...pageProps} />
      {!showHeaderFooter && <Footer light={2} dark={2} />}
    </Providers>
  );
}

export default MyApp;
