import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
