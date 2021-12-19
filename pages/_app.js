import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider >
      <Layout router={router} />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default MyApp
