import { client, previewClient } from "@/lib/client";
import { GetStaticProps } from "next";
import { TypeTestContentSkeleton } from "../../../types/contentful";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ServicesPage({ content }: any) {
  const updatedContent = useContentfulLiveUpdates(content);
  console.log("OPEN SOURCE PAGE: ", updatedContent);

  return (
    <>
      <h1>Open Source Page</h1>
      <h3>{updatedContent.items[0].fields.name}</h3>
      <p>{updatedContent.items[0].fields.description}</p>
      {documentToReactComponents(updatedContent.items[0].fields.blog)}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  console.log("hey from OPEN SOURCE Page");

  const contentful = preview ? previewClient : client;

  const content = await contentful.getEntries<TypeTestContentSkeleton>({
    content_type: "testContent",
  });

  return {
    props: {
      content,
    },
  };
};
