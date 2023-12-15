import { TypePageSectionSkeleton } from "../../types/contentful";
import { Entry } from "contentful";
import { client } from "./client";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type PageSectionEntry = Entry<TypePageSectionSkeleton, undefined, string>;

export interface PageSection {
  pagesectionName: string;
  primaryHeading: string;
  primarySubheading: string;
  primaryCta: string;
  primaryImage: ContentImage | null;
}

export function parseContentfulPageSection(
  pageSectionEntry?: PageSectionEntry
): PageSection | null {
  if (!pageSectionEntry) {
    return null;
  }

  return {
    pagesectionName: pageSectionEntry.fields.pagesectionName || "",
    primaryHeading: pageSectionEntry.fields.primaryHeading || "",
    primarySubheading: pageSectionEntry.fields.primarySubheading || "",
    primaryCta: pageSectionEntry.fields.primaryCta || "",
    primaryImage: parseContentfulContentImage(
      pageSectionEntry.fields.primaryImage
    ),
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
