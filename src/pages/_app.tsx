import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GetStaticProps } from "next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await client.getEntries({ content_type: "navBar" });
  // console.log("NAVBAR: ", res);
  // console.log("client token1: ", client.space);

  console.log("hey is this working?");

  return {
    props: {},
  };
};
