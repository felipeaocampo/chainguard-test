import { GetStaticProps } from "next";

export default function ChainguardImagesPage() {
  return <h1>Chainguard Images Page</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await client.getEntries({ content_type: "navBar" });
  // console.log("NAVBAR: ", res);
  // console.log("client token1: ", client.space);

  // console.log("hey from the images page!");

  return {
    props: {},
  };
};
