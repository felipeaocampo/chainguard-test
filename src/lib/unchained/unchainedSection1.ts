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
  featuredBlogs: BlogCard[];
  // heading: string;
  // subheading: string;
  // description: string;
  // benefitsCards: benefitsCard[];
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

  const sectionGeneralContentCard1 = pageSectionEntry.fields
    .pageSectionParts[0] as TypeBlogs<undefined, string>;

  if (!sectionGeneralContentCard1.fields.featuredBlogs) {
    return null;
  }

  //WRITE A FUNC THAT WILL PARSE OUR EACH BLOG CARD GIVING YOU EXACTLY THE NECESSARY INFO. SEE BLOGCARD TYPE ABOVE FOR EXACT DATA NEEDED
  const featuredBlogsData = sectionGeneralContentCard1.fields
    .featuredBlogs as TypeBlog<undefined, string>[];

  const featuredBlogs = featuredBlogsData.map((blog) => parseBlogCard(blog));

  // console.log(featuredBlogs[1].fields.blogContent);

  return {
    pagesectionName: sectionGeneralContentCard1.fields.blogsPageName || "",
    featuredBlogs,
    // pagesectionName: sectionGeneralContentCard1.fields.pageSectionName || "",
    // heading: sectionGeneralContentCard1.fields.heading || "",
    // subheading: sectionGeneralContentCard1.fields.subheading || "",
    // description: sectionGeneralContentCard1.fields.descriptionText || "",
    // benefitsCards: benefitsData,
  };
}
