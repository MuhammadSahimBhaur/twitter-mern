import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{}}>
      <Head>
        <title>Twitter</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
