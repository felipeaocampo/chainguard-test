import { Document as RichtextDocument } from "@contentful/rich-text-types";
import {
  TypeBlog,
  TypeBlogs,
  TypeGeneralContentCard,
  TypePageSection,
} from "@/../types/contentful";
import { ContentImage, parseContentfulContentImage } from "../contentImage";
import { AssignType } from "@/pages";
import { ReactNode } from "react";
import { parseBlogCard } from "./parseBlogCard";

// https://maxschmitt.me/posts/nextjs-contentful-typescript HELPFUL ARTICLE

type UnchainedSection1Cta = {
  "/#": string;
};

export type BlogCard = {
  cardImg: ContentImage | null;
  category: string[];
  title: string;
  slug: string;
  about: string;
  authors: string[];
  content?: RichtextDocument;
  datePublished: string;
};

export interface UnchainedSection1Props {
  pagesectionName: string;
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  featuredBlogs: BlogCard[];
}

export function parseContentfulUnchainedSection1(
  pageSectionEntry?: TypePageSection<undefined, string>
): UnchainedSection1Props | null {
  if (!pageSectionEntry) {
    return null;
  }

  //STEP 1: SEPARATE SECTION INTO PARTS
  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA
  //STEP 3: RETURN THE NECESSARY DATA

  if (!pageSectionEntry.fields.pageSectionParts) {
    return null;
  }

  const unchainedSection1MainContentCard = pageSectionEntry.fields
    .pageSectionParts[1] as TypeGeneralContentCard<undefined, string>;
  const unchainedSection1BlogsData = pageSectionEntry.fields
    .pageSectionParts[0] as TypeBlogs<undefined, string>;

  const cta = unchainedSection1MainContentCard.fields
    .ctas as UnchainedSection1Cta;

  const [ctaText] = Object.values(cta);

  if (!unchainedSection1BlogsData.fields.featuredBlogs) {
    return null;
  }

  //WRITE A FUNC THAT WILL PARSE OUR EACH BLOG CARD GIVING YOU EXACTLY THE NECESSARY INFO. SEE BLOGCARD TYPE ABOVE FOR EXACT DATA NEEDED
  const featuredBlogsData = unchainedSection1BlogsData.fields
    .featuredBlogs as TypeBlog<undefined, string>[];

  const featuredBlogs = featuredBlogsData.map((blog) => parseBlogCard(blog));

  // console.log(unchainedSection1MainContentCard);

  return {
    pagesectionName: unchainedSection1BlogsData.fields.blogsPageName || "",
    heading: unchainedSection1MainContentCard.fields.heading || "",
    subheading: unchainedSection1MainContentCard.fields.subheading || "",
    description: unchainedSection1MainContentCard.fields.descriptionText || "",
    ctaText,
    featuredBlogs,
  };
}
