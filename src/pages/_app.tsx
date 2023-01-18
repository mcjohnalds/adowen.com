import "@/styles/globals.css";
import "@/styles/typography.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics trackPageViews />
      )}
      <Component {...pageProps} />
    </>
  );
}
