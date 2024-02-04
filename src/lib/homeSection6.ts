import { TypeGeneralContentCard, TypePageSection } from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { AssignType } from "@/pages";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

type HomeSection6Cta = {
  "/contact": string;
};

export interface HomeSection6 {
  pagesectionName: string;
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export function parseContentfulHomeSection6(
  pageSectionEntry?: TypePageSection<undefined, string>
): HomeSection6 | null {
  if (!pageSectionEntry) {
    return null;
  }

  //STEP 1: SEPARATE SECTION INTO PARTS
  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA
  //STEP 3: RETURN THE NECESSARY DATA

  if (!pageSectionEntry.fields.pageSectionParts) {
    return null;
  }

  const sectionGeneralContentCard1 = pageSectionEntry.fields
    .pageSectionParts[0] as AssignType<
    TypeGeneralContentCard<undefined, string>
  >;

  const cta = sectionGeneralContentCard1.fields.ctas as HomeSection6Cta;

  const [[ctaLink, ctaText]] = Object.entries(cta);

  return {
    pagesectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    heading: sectionGeneralContentCard1.fields.heading || "",
    subheading: sectionGeneralContentCard1.fields.subheading || "",
    description: sectionGeneralContentCard1.fields.descriptionText || "",
    ctaText: ctaText,
    ctaLink: ctaLink,
  };
}
