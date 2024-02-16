import { TypeGeneralContentCard, TypePageSection } from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { AssignType } from "@/pages";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

export type slideCard = {
  slideHeading: string;
  slideSubheading: string;
  slideImg: ContentImage | null;
};

type HomeSection4Cta = {
  "/contact": string;
};

export interface HomeSection4 {
  pagesectionName: string;
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  sliderCards: slideCard[];
}

export function parseContentfulHomeSection4(
  pageSectionEntry?: TypePageSection<undefined, string>
): HomeSection4 | null {
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

  const cta = sectionGeneralContentCard1.fields.ctas as HomeSection4Cta;

  const [[ctaLink, ctaText]] = Object.entries(cta);

  // console.log("PAGESECTPARTS: ", pageSectionEntry.fields.pageSectionParts);

  const sliderData: slideCard[] = [];
  for (let i = 1; i < pageSectionEntry.fields.pageSectionParts.length; i++) {
    const sectionGeneralContentCardCurrent = pageSectionEntry.fields
      .pageSectionParts[i] as AssignType<
      TypeGeneralContentCard<undefined, string>
    >;

    if (!sectionGeneralContentCardCurrent.fields.media) {
      return null;
    }

    sliderData.push({
      slideHeading: sectionGeneralContentCardCurrent.fields.heading || "",
      slideSubheading: sectionGeneralContentCardCurrent.fields.subheading || "",
      slideImg: parseContentfulContentImage(
        sectionGeneralContentCardCurrent.fields.media[0]
      ),
    });
  }

  return {
    pagesectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    heading: sectionGeneralContentCard1.fields.heading || "",
    subheading: sectionGeneralContentCard1.fields.subheading || "",
    description: sectionGeneralContentCard1.fields.descriptionText || "",
    ctaText: ctaText,
    ctaLink: ctaLink,
    sliderCards: sliderData,
  };
}
