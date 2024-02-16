import { client, previewClient } from "@/lib/client";
import { GetStaticProps } from "next";
import {
  TypeGeneralPage,
  TypeGeneralPageSkeleton,
  TypePageSection,
  TypeTestContentSkeleton,
} from "../../../types/contentful";
import {
  useContentfulLiveUpdates,
  useContentfulInspectorMode,
} from "@contentful/live-preview/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { parseContentfulOpenSourceSection1 } from "@/lib/open-source/openSourceSection1";
import OpenSourceSection1 from "@/components/OpenSource/OpenSourceSection1";
import { parseContentfulOpenSourceSection2 } from "@/lib/open-source/openSourceSection2";
import OpenSourceSection2 from "@/components/OpenSource/OpenSourceSection2";

type OpenSourcePageProps = {
  content: TypeGeneralPage<undefined, string>;
};

export default function OpenSourcePage({ content }: OpenSourcePageProps) {
  const liveContent = useContentfulLiveUpdates(content);

  if (!liveContent.fields.pageSection) {
    console.log("no pageSection");
    return null;
  }

  // console.log("LIVE CONTENT: ", liveContent);

  const section1Data = parseContentfulOpenSourceSection1(
    liveContent.fields.pageSection[0] as TypePageSection<undefined, string>
  );
  const section2Data = parseContentfulOpenSourceSection2(
    liveContent.fields.pageSection[1] as TypePageSection<undefined, string>
  );

  // console.log("OPEN SOURCE PAGE: ", section2Data);

  if (!section1Data || !section2Data) {
    console.log("returned null", section1Data);
    return null;
  }

  return (
    <main className="font-sans overflow-hidden border-b solid w-full">
      <div className="w-full bg-hero-cg-gradient">
        <OpenSourceSection1 section1Props={section1Data} />
        <OpenSourceSection2 section2Props={section2Data} />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const contentful = preview ? previewClient : client;

  const content = await contentful.getEntries<TypeGeneralPageSkeleton>({
    content_type: "generalPage",
    "fields.pageName": "Open Source",
    include: 10,
  });
  // console.log(content);

  return {
    props: {
      content: content.items[0],
    },
  };
};
