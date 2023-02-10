import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

import type { AppProps } from "next/app";

// backend setup
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
