import { TypeGeneralContentCard, TypePageSection } from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "../contentImage";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

// type HomeSection6Cta = {
//   "/contact": string;
// };

export interface OpenSourceSection1 {
  pageSectionName: string;
  heading: string;
  subheading: string;
  description: string;
  img: ContentImage | null;
  link: string;
  linkedText: string;
  unlinkedText: string;
}

type JsonCta = {
  link: string;
  linkedText: string;
  unlinkedText: string;
};

export function parseContentfulOpenSourceSection1(
  pageSectionEntry?: TypePageSection<undefined, string>
): OpenSourceSection1 | null {
  if (!pageSectionEntry) {
    return null;
  }

  //STEP 1: SEPARATE SECTION INTO PARTS
  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA
  //STEP 3: RETURN THE NECESSARY DATA

  if (!pageSectionEntry.fields.pageSectionParts) {
    return {
      pageSectionName: "",
      heading: "",
      subheading: "",
      description: "",
      img: null,
      link: "",
      linkedText: "",
      unlinkedText: "",
    };
  }

  const sectionGeneralContentCard1 = pageSectionEntry.fields
    .pageSectionParts[0] as TypeGeneralContentCard<undefined, string>;
  // console.log(
  //   "INSIDE parseContentfulOpenSourceSection1: ",
  //   sectionGeneralContentCard1
  // );

  const image = sectionGeneralContentCard1.fields.media;
  const cta = sectionGeneralContentCard1.fields.ctas as JsonCta;
  const [link, linkedText, unlinkedText] = Object.values(cta);

  if (!image) {
    return null;
  }

  const parsedImg = parseContentfulContentImage(image[0]);

  return {
    pageSectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    heading: sectionGeneralContentCard1.fields.heading || "",
    subheading: sectionGeneralContentCard1.fields.subheading || "",
    description: sectionGeneralContentCard1.fields.descriptionText || "",
    img: parsedImg,
    link,
    linkedText,
    unlinkedText,
  };
}
