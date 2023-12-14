import { GetStaticProps } from "next";

export default function ServicesPage() {
  return <h1>Open Source Page</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("hey from Services Page");
  return {
    props: {},
  };
};
