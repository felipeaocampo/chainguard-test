import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GetStaticProps } from "next";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import "@contentful/live-preview/style.css";

export default function App({ Component, pageProps }: AppProps) {
  // console.log("LOCATION __APP, pageProps:", pageProps);
  // console.log("LOCATION __APP, pageProps.preview:", pageProps.preview);
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates={pageProps.preview}
      enableInspectorMode={pageProps.preview}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContentfulLivePreviewProvider>
  );
}
