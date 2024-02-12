import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GetStaticProps } from "next";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

export default function App({ Component, pageProps }: AppProps) {
  // console.log("LOCATION __APP, pageProps:", pageProps);
  // console.log("LOCATION __APP, pageProps.preview:", pageProps.preview);
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates={pageProps.preview}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContentfulLivePreviewProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await client.getEntries({ content_type: "navBar" });
  // console.log("NAVBAR: ", res);
  // console.log("client token1: ", client.space);

  console.log("THIS LOG IS COMING FROM THE _APP FILE IN THE PAGES DIRECTORY");

  return {
    props: {},
  };
};
