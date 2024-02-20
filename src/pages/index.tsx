import { client, previewClient } from "@/lib/client";
import {
  client as clientCodeGen,
  previewClient as previewClientCodeGen,
} from "@/lib/clientCodeGen";
import { parseContentfulContentImage } from "@/lib/contentImage";

import {
  TypeGeneralPageSkeleton,
  TypePageSection,
  TypeSeoMetadata,
} from "../../types/contentful";
import HomeSection1, { HomeSection1Props } from "@/components/Home/Section1";
import { parseContentfulHomeSection1 } from "@/lib/homeSection1";
import { parseContentfulHomeSection2 } from "@/lib/homeSection2";
import { parseContentfulHomeSection3 } from "@/lib/homeSection3";

import { parseContentfulHomeSection4 } from "@/lib/homeSection4";
import { parseContentfulHomeSection5 } from "@/lib/homeSection5";
import { parseContentfulHomeSection6 } from "@/lib/homeSection6";
import HomeSection2, { HomeSection2Props } from "@/components/Home/Section2";
import { useEffect, useRef } from "react";
import HomeSection3, { HomeSection3Props } from "@/components/Home/Section3";
import HomeSection4, { HomeSection4Props } from "@/components/Home/Section4";
import HomeSection5, { HomeSection5Props } from "@/components/Home/Section5";
import HomeSection6, { HomeSection6Props } from "@/components/Home/Section6";
import { GetStaticProps } from "next";
import { getHomePageData } from "@/lib/graphql/requests";

export type HomePageProps = {
  section1Props: HomeSection1Props;
  section2Props: HomeSection2Props;
  section3Props: HomeSection3Props;
  section4Props: HomeSection4Props;
  section5Props: HomeSection5Props;
  section6Props: HomeSection6Props;
};

export default function Home({
  section1Props,
  section2Props,
  section3Props,
  section4Props,
  section5Props,
  section6Props,
}: HomePageProps) {
  return (
    <main className="font-sans overflow-hidden border-b solid w-full">
      <div className="w-full bg-hero-cg-gradient">
        <HomeSection1 section1Props={section1Props} />
      </div>
      <HomeSection2 section2Props={section2Props} />
      <HomeSection3 section3Props={section3Props} />
      <HomeSection4 section4Props={section4Props} />
      <HomeSection5 section5Props={section5Props} />
      <HomeSection6 section6Props={section6Props} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const contentful = preview ? previewClient : client;

  const page = await contentful.getEntries<TypeGeneralPageSkeleton>({
    content_type: "generalPage",
    "fields.pageName": "Homepage",
    include: 10,
  });

  // console.log(page.items[0]);

  //turn into its own lib api
  //0: Get page meta data types
  const typedMetaData = page.items[0].fields.pageMetadata as AssignType<
    TypeSeoMetadata<undefined, string>
  >;

  const homePageMetaData = {
    title: typedMetaData.fields.pageTitle,
    metaDescription: typedMetaData.fields.metaDescription,
    favicon: parseContentfulContentImage(typedMetaData.fields.favicon),
  };

  // 1ST: ASSIGN TYPES TO EACH SECTION OF PAGE
  // const section1Typed = assignSectionTypes<TypePageSection<undefined, string>>(
  //   page.items[0].fields.section1
  // );

  if (!page.items[0].fields.pageSection) {
    return {
      // INSERT OBJ W/ ALL EMPTY STRINGS FOR NECESSARY DATA SO IF CONTENTFUL IS DOWN OR SOMETHING HAPPENS THE PAGE DOESNT CRASH!
      props: {},
    };
  }

  // console.log("LENGTH: ", page.items[0].fields.pageSection.length);

  const typedSection1 = page.items[0].fields.pageSection[0] as AssignType<
    TypePageSection<undefined, string>
  >;
  const typedSection2 = page.items[0].fields.pageSection[1] as AssignType<
    TypePageSection<undefined, string>
  >;
  const typedSection3 = page.items[0].fields.pageSection[2] as AssignType<
    TypePageSection<undefined, string>
  >;

  const typedSection4 = page.items[0].fields.pageSection[3] as AssignType<
    TypePageSection<undefined, string>
  >;

  const typedSection5 = page.items[0].fields.pageSection[4] as AssignType<
    TypePageSection<undefined, string>
  >;

  const typedSection6 = page.items[0].fields.pageSection[5] as AssignType<
    TypePageSection<undefined, string>
  >;
  // console.log("TYPEDSECTION4", typedSection5);

  //2ND: GET CONTENT FOR EACH PART OF SECTION SECTION
  const section1Data = parseContentfulHomeSection1(typedSection1);
  const section2Data = parseContentfulHomeSection2(typedSection2);
  const section3Data = parseContentfulHomeSection3(typedSection3);
  const section4Data = parseContentfulHomeSection4(typedSection4);
  const section5Data = parseContentfulHomeSection5(typedSection5);
  const section6Data = parseContentfulHomeSection6(typedSection6);

  if (!section1Data?.primaryCta) {
    return {
      props: {},
    };
  }

  // console.log(section4Data?.sliderCards[0].slideImg?.alt);

  const [[ctaLink, ctaText]] = Object.entries(section1Data?.primaryCta);
  const [[floatingHeaderLink, floatingHeaderText]] = Object.entries(
    section1Data?.floatingHeaderText
  );

  ///START GRAPHQL REQUEST TEST //////
  const test = await getHomePageData(preview);
  // console.log(test);
  ///END GRAPHQL REQUEST TEST //////

  ///START CODE GEN SDK REQUEST TEST //////
  const graphqlClient = preview ? previewClientCodeGen : clientCodeGen;

  const asdf = await graphqlClient.getUnchainedPageData({ preview });
  // console.log(asdf);
  ///END CODE GEN SDK REQUEST TEST //////

  //3RD: SET CONTENT INTO PROPS
  return {
    props: {
      section1Props: {
        heroHeading: section1Data?.primaryHeading,
        heroSubHeading: section1Data?.primarySubheading,
        heroImg: {
          src: section1Data?.primaryImage?.src,
          alt: section1Data?.primaryImage?.alt,
          width: section1Data?.primaryImage?.width,
          height: section1Data?.primaryImage?.height,
        },
        heroCtaLink: ctaLink,
        heroCtaText: ctaText,
        floatingHeaderLink,
        floatingHeaderText,
      },
      section2Props: section2Data,
      section3Props: section3Data,
      section4Props: section4Data,
      section5Props: section5Data,
      section6Props: section6Data,
      preview: preview || false,
    },
  };
};

export type AssignType<T> = T;
