import { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../contexts/SideBarDrawer'
import { makeServer } from '../components/services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <QueryClientProvider client={new QueryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
   </QueryClientProvider>
  )
}

export default MyApp
