import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

import type { AppProps } from "next/app";

// backend setup
import { Amplify, Auth, Storage } from "aws-amplify";
const awsconfig = require("../aws-exports").default;
Amplify.configure({ ...awsconfig, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
