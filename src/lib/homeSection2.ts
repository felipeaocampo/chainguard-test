import {
  TypeCustomerTestimonialCard,
  TypeCustomersSection,
  TypeGeneralContentCard,
  TypePageSection,
} from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { AssignType } from "@/pages";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

export type CtaHomeSection2 = {
  "https://www.chainguard.dev/customers": string;
};

type HomeSection2Cta = {
  "https://www.chainguard.dev/customers": string;
};

export type FloatingHeaderText = {
  "/unchained/:some-blog": string;
};

export interface HomeSection2 {
  pagesectionName: string;
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  customerLogos: ContentImage[];
  customerTestimonials: CustomerTestimonial[];
}

export type CustomerTestimonial = {
  testimonial: string;
  customerName: string;
  titleposition: string;
  testimonialLogo: ContentImage;
} | null;

export function parseContentfulHomeSection2(
  pageSectionEntry?: TypePageSection<undefined, string>
): HomeSection2 | null {
  if (!pageSectionEntry) {
    return null;
  }

  //STEP 1: SEPARATE SECTION INTO PARTS
  if (!pageSectionEntry.fields.pageSectionParts) {
    return null;
  }

  const sectionGeneralContentCard = pageSectionEntry.fields
    .pageSectionParts[0] as AssignType<
    TypeGeneralContentCard<undefined, string>
  >;
  const sectionCustomers = pageSectionEntry.fields
    .pageSectionParts[1] as AssignType<TypeCustomersSection<undefined, string>>;

  const customerLogos = sectionCustomers.fields.selectCustomerLogos
    ?.map((logoImgEntry) => parseContentfulContentImage(logoImgEntry))
    .filter((logo): logo is ContentImage => logo !== null);

  const customerTestimonials = sectionCustomers.fields.selectTestimonials?.map(
    (testimonialEntry): CustomerTestimonial => {
      const parsedTestimonial = testimonialEntry as AssignType<
        TypeCustomerTestimonialCard<undefined, string>
      >;

      const testimonialLogo = parseContentfulContentImage(
        parsedTestimonial.fields.logo
      );

      if (!testimonialLogo) {
        return null;
      }

      return {
        testimonial: parsedTestimonial.fields.testimonial || "",
        customerName: parsedTestimonial.fields.customerName || "",
        titleposition: parsedTestimonial.fields.titleposition || "",
        testimonialLogo,
      };
    }
  );

  if (!customerTestimonials || !customerTestimonials) {
    return null;
  }

  // console.log("CUSTOMER TESTIMONIALS: ", customerTestimonials);

  const cta = sectionGeneralContentCard.fields.ctas as HomeSection2Cta;

  if (!customerLogos) {
    return null;
  }

  const [[ctaLink, ctaText]] = Object.entries(cta);

  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA

  //STEP 3: RETURN THE NECESSARY DATA
  return {
    pagesectionName: sectionGeneralContentCard.fields.pageSectionName || "",
    heading: sectionGeneralContentCard.fields.heading || "",
    subheading: sectionGeneralContentCard.fields.subheading || "",
    ctaText: ctaText,
    ctaLink: ctaLink,
    customerLogos,
    customerTestimonials,
  };
}
