import { GetStaticProps } from "next";
import { client, previewClient } from "@/lib/client";
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
import { parseContentfulUnchainedSection2 } from "@/lib/unchained/unchainedSection2";
import stringifySafe from "json-stringify-safe";

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

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const contentful = preview ? previewClient : client;

  const page = await contentful.getEntries<TypeGeneralPageSkeleton>({
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
  const typedUnchainedSection2 = page.items[0].fields
    .pageSection[1] as TypePageSection<undefined, string>;

  const unchainedSection1Data = parseContentfulUnchainedSection1(
    typedUnchainedSection1
  );
  const unchainedSection2Data = await parseContentfulUnchainedSection2(
    typedUnchainedSection2
  );

  // console.log("IS THIS IT: ", unchainedSection2Data);

  return {
    props: {
      unchainedSection1Props: unchainedSection1Data,
    },
  };
};
