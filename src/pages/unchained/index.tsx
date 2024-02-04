import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

import { client } from "@/lib/client";
import UnchainedSection1 from "@/components/Unchained/UnchainedSection1";
import {
  TypeGeneralPageSkeleton,
  TypePageSection,
  TypeSeoMetadata,
} from "@/../types/contentful";
import { AssignType } from "..";
import {
  UnchainedSection1Props,
  parseContentfulUnchainedSection1,
} from "@/lib/unchained/unchainedSection1";
import { ReactElement, ReactNode } from "react";
import { GetStaticProps } from "next";

export type UnchainedPageProps = {
  unchainedSection1Props: UnchainedSection1Props;
};

// SUPER HELPFUL CODE TO FOLLOW: https://maxschmitt.me/posts/nextjs-contentful-typescript

export default function UnchainedPage({
  unchainedSection1Props,
}: UnchainedPageProps) {
  // console.log(unchainedSection1Props.blogContent.blogContent);

  return (
    <main>
      <UnchainedSection1 unchainedSection1Props={unchainedSection1Props} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<TypeGeneralPageSkeleton>({
    content_type: "generalPage",
    "fields.pageName": "Unchained Page",
    include: 10,
  });

  if (!page.items[0].fields.pageSection) {
    return {
      // INSERT OBJ W/ ALL EMPTY STRINGS FOR NECESSARY DATA SO IF CONTENTFUL IS DOWN OR SOMETHING HAPPENS THE PAGE DOESNT CRASH!
      props: {},
    };
  }

  const typedUnchainedSection1 = page.items[0].fields
    .pageSection[0] as TypePageSection<undefined, string>;

  const unchainedSection1Data = parseContentfulUnchainedSection1(
    typedUnchainedSection1
  );

  console.log("/unchained getstaticprops");

  return {
    props: {
      unchainedSection1Props: unchainedSection1Data,
    },
  };
};
