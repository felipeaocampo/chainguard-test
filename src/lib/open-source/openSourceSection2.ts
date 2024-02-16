import {
  TypeCustomersSection,
  TypeGeneralContentCard,
  TypePageSection,
} from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "../contentImage";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

// type HomeSection6Cta = {
//   "/contact": string;
// };

export interface OpenSourceSection2 {
  // pageSectionName: string;
  heading: string;
  customerLogos: ContentImage[];
  // subheading: string;
  // description: string;
  // img: ContentImage | null;
  // link: string;
  // linkedText: string;
  // unlinkedText: string;
}

type JsonCta = {
  link: string;
  linkedText: string;
  unlinkedText: string;
};

export function parseContentfulOpenSourceSection2(
  pageSectionEntry?: TypePageSection<undefined, string>
): OpenSourceSection2 | null {
  if (!pageSectionEntry) {
    return null;
  }
  // console.log(
  //   "OSS PARSE SECTION 2: ",
  //   pageSectionEntry.fields.pageSectionParts
  // );

  //STEP 1: SEPARATE SECTION INTO PARTS
  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA
  //STEP 3: RETURN THE NECESSARY DATA

  if (!pageSectionEntry.fields.pageSectionParts) {
    return {
      // pageSectionName: "",
      heading: "",
      customerLogos: [],
    };
  }

  const sectionGeneralContentCard1 = pageSectionEntry.fields
    .pageSectionParts[0] as TypeGeneralContentCard<undefined, string>;
  const sectionCustomers = pageSectionEntry.fields
    .pageSectionParts[1] as TypeCustomersSection<undefined, string>;

  const customerLogos = sectionCustomers.fields.selectCustomerLogos
    ?.map((logoImgEntry) => parseContentfulContentImage(logoImgEntry))
    .filter((logo): logo is ContentImage => logo !== null);
  // console.log("INSIDE parseContentfulOpenSourceSection2: ", customerLogos);

  return {
    // pageSectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    heading: sectionGeneralContentCard1.fields.heading || "",
    customerLogos: customerLogos || [],
  };
}
