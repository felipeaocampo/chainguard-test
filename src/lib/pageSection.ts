import {
  TypeButterBar,
  TypePageSection,
  TypePageSectionSkeleton,
} from "@/../types/contentful";
import { client } from "./client";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { ButterBar } from "@/../types/SectionTypes";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

export interface PageSection {
  pagesectionName: string;
  primaryHeading: string;
  primarySubheading: string;
  primaryCta: string;
  primaryImage: ContentImage | null;
  butterBar: ButterBar | null;
}

export function parseButterBarEntry(
  param: TypeButterBar<undefined, string>
): ButterBar {
  return {
    pagesectionButterBar: param.fields.pagesectionButterBar || "",
    butterText: param.fields.butterBarText || "",
    butterLink: param.fields.butterBarLink || "",
  };
}

export function parseContentfulPageSection(
  pageSectionEntry?: TypePageSection<undefined, string>
): PageSection | null {
  if (!pageSectionEntry) {
    return null;
  }
  const butterBarEntry = pageSectionEntry.fields.butterBar as TypeButterBar<
    undefined,
    string
  >;

  return {
    pagesectionName: pageSectionEntry.fields.pagesectionName || "",
    primaryHeading: pageSectionEntry.fields.primaryHeading || "",
    primarySubheading: pageSectionEntry.fields.primarySubheading || "",
    primaryCta: pageSectionEntry.fields.primaryCta || "",
    primaryImage: parseContentfulContentImage(
      pageSectionEntry.fields.primaryImage
    ),
    butterBar: parseButterBarEntry(butterBarEntry),
  };
}

interface FetchPageSectionsOptions {
  preview: Boolean;
}

export async function fetchPageSections({
  preview,
}: FetchPageSectionsOptions): Promise<PageSection[]> {
  const pageSectionsResult = await client.getEntries<TypePageSectionSkeleton>({
    content_type: "pageSection",
    include: 2,
  });

  return pageSectionsResult.items.map(
    (pageSectionEntry) =>
      parseContentfulPageSection(pageSectionEntry) as PageSection
  );
}

interface FetchPageSectionOptions {
  pagesectionName: string;
  preview: Boolean;
}

export async function fetchPageSection({
  pagesectionName,
  preview,
}: FetchPageSectionOptions): Promise<PageSection | null> {
  const pageSectionResult = await client.getEntries<TypePageSectionSkeleton>({
    content_type: "pageSection",
    "fields.pagesectionName": pagesectionName,
    include: 2,
  });

  return parseContentfulPageSection(pageSectionResult.items[0]);
}
