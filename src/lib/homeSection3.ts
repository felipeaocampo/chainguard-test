import { TypeGeneralContentCard, TypePageSection } from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { AssignType } from "@/pages";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

export type subcardListItem = {
  subcardHeading: string;
  subcardSubheading: string;
};

type HomeSection3Cta = {
  "/chainguard-images": string;
};

export interface HomeSection3 {
  pagesectionName: string;
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  subCardListItems: subcardListItem[];
}

export function parseContentfulHomeSection3(
  pageSectionEntry?: TypePageSection<undefined, string>
): HomeSection3 | null {
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

  const cta = sectionGeneralContentCard1.fields.ctas as HomeSection3Cta;

  const [[ctaLink, ctaText]] = Object.entries(cta);

  const subcardsData = [];

  for (let i = 1; i < pageSectionEntry.fields.pageSectionParts.length; i++) {
    const sectionGeneralContentCardCurrent = pageSectionEntry.fields
      .pageSectionParts[i] as AssignType<
      TypeGeneralContentCard<undefined, string>
    >;
    subcardsData.push({
      subcardHeading: sectionGeneralContentCardCurrent.fields.heading || "",
      subcardSubheading:
        sectionGeneralContentCardCurrent.fields.subheading || "",
    });
  }

  return {
    pagesectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    heading: sectionGeneralContentCard1.fields.heading || "",
    subheading: sectionGeneralContentCard1.fields.subheading || "",
    description: sectionGeneralContentCard1.fields.descriptionText || "",
    ctaText: ctaText,
    ctaLink: ctaLink,
    subCardListItems: subcardsData,
  };
}
