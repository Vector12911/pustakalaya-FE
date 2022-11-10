import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from 'src/lib/react-toastify';
import queryClient from 'src/lib/react-query';
import { CartProvider } from 'src/features/Cart/context';
// import { CartProvider } from '../context/cart-context';

function Providers({ children, pageProps }) {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {children}
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default Providers;
