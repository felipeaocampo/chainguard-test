import { TypeGeneralContentCard, TypePageSection } from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { AssignType } from "@/pages";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

export type benefitsCard = {
  benefitsHeading: string;
  benefitsSubheading: string;
  benefitsIcon: ContentImage | null;
};

export interface HomeSection5 {
  pagesectionName: string;
  heading: string;
  subheading: string;
  description: string;
  benefitsCards: benefitsCard[];
}

export function parseContentfulHomeSection5(
  pageSectionEntry?: TypePageSection<undefined, string>
): HomeSection5 | null {
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

  // console.log("PAGESECTPARTS: ", pageSectionEntry.fields.pageSectionParts);

  const benefitsData: benefitsCard[] = [];
  for (let i = 1; i < pageSectionEntry.fields.pageSectionParts.length; i++) {
    const sectionGeneralContentCardCurrent = pageSectionEntry.fields
      .pageSectionParts[i] as AssignType<
      TypeGeneralContentCard<undefined, string>
    >;

    if (!sectionGeneralContentCardCurrent.fields.media) {
      return null;
    }

    benefitsData.push({
      benefitsHeading: sectionGeneralContentCardCurrent.fields.heading || "",
      benefitsSubheading:
        sectionGeneralContentCardCurrent.fields.subheading || "",
      benefitsIcon: parseContentfulContentImage(
        sectionGeneralContentCardCurrent.fields.media[0]
      ),
    });
  }

  return {
    pagesectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    heading: sectionGeneralContentCard1.fields.heading || "",
    subheading: sectionGeneralContentCard1.fields.subheading || "",
    description: sectionGeneralContentCard1.fields.descriptionText || "",
    benefitsCards: benefitsData,
  };
}
