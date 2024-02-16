import {
  TypeGeneralContentCard,
  TypePageSection,
  TypePageSectionSkeleton,
} from "@/../types/contentful";
import { client } from "./client";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { ButterBar } from "@/../types/SectionTypes";
import { AssignType } from "@/pages";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

export type Cta = {
  "/contact": string;
};

export type FloatingHeaderText = {
  "/unchained/:some-blog": string;
};

export interface PageSection {
  pagesectionName: string;
  primaryHeading: string;
  primarySubheading: string;
  primaryCta: Cta;
  primaryImage: ContentImage | null;
  floatingHeaderText: FloatingHeaderText;
  // butterBar: ButterBar | null;
}

// export function parseButterBarEntry(
//   param: TypeButterBar<undefined, string>
// ): ButterBar {
//   return {
//     pagesectionButterBar: param.fields.pagesectionButterBar || "",
//     butterText: param.fields.butterBarText || "",
//     butterLink: param.fields.butterBarLink || "",
//   };
// }

export function parseContentfulPageSection(
  pageSectionEntry?: TypePageSection<undefined, string>
): PageSection | null {
  if (!pageSectionEntry) {
    return null;
  }

  //STEP 1: SEPARATE SECTION INTO PARTS

  if (!pageSectionEntry.fields.pageSectionParts) {
    return null;
  }

  const section = pageSectionEntry.fields.pageSectionParts[0] as AssignType<
    TypeGeneralContentCard<undefined, string>
  >;

  const cta = section.fields.ctas;
  const image = section.fields.media;
  const floatingText = section.fields.floatingHeaderText;

  if (!cta || !image || !floatingText) {
    return null;
  }

  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA

  //STEP 3: RETURN THE NECESSARY DATA
  return {
    pagesectionName: section.fields.pageSectionName || "",
    primaryHeading: section.fields.heading || "",
    primarySubheading: section.fields.subheading || "",
    primaryCta: cta as Cta,
    primaryImage: parseContentfulContentImage(image[0]),
    floatingHeaderText: floatingText as FloatingHeaderText,
    // butterBar: parseButterBarEntry(butterBarEntry),
  };
}

// interface FetchPageSectionsOptions {
//   preview: Boolean;
// }

// export async function fetchPageSections({
//   preview,
// }: FetchPageSectionsOptions): Promise<PageSection[]> {
//   const pageSectionsResult = await client.getEntries<TypePageSectionSkeleton>({
//     content_type: "pageSection",
//     include: 2,
//   });

//   return pageSectionsResult.items.map(
//     (pageSectionEntry) =>
//       parseContentfulPageSection(pageSectionEntry) as PageSection
//   );
// }

// interface FetchPageSectionOptions {
//   pagesectionName: string;
//   preview: Boolean;
// }

// export async function fetchPageSection({
//   pagesectionName,
//   preview,
// }: FetchPageSectionOptions): Promise<PageSection | null> {
//   const pageSectionResult = await client.getEntries<TypePageSectionSkeleton>({
//     content_type: "pageSection",
//     "fields.pagesectionName": pagesectionName,
//     include: 2,
//   });

//   return parseContentfulPageSection(pageSectionResult.items[0]);
// }
