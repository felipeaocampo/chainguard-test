import { Document as RichtextDocument } from "@contentful/rich-text-types";
import {
  TypeBlogSkeleton,
  TypeBlogs,
  TypePageSection,
  TypeSearchBar,
} from "@/../types/contentful";
import { ContentImage } from "../contentImage";
import { parseBlogCard } from "./parseBlogCard";
import { client } from "../client";

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

export type SearchBar = {
  placeholder: string;
  optionsLabel: string;
  options: string[];
};

export interface UnchainedSection2Props {
  blogs: BlogCard[];
  searchBarData: SearchBar;
}

const getAllBlogs = async () => {
  const allBlogsData = await client.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    include: 10,
  });

  return allBlogsData;
};

export async function parseContentfulUnchainedSection2(
  pageSectionEntry?: TypePageSection<undefined, string>
): Promise<UnchainedSection2Props | null> {
  if (!pageSectionEntry) {
    return null;
  }

  //STEP 1: SEPARATE SECTION INTO PARTS
  //STEP 2: PARSE EACH PART TO ABSTRACT AND TYPE THE NECESSARY DATA
  //STEP 3: RETURN THE NECESSARY DATA

  if (!pageSectionEntry.fields.pageSectionParts) {
    return null;
  }

  const unchainedSection2BlogsData = pageSectionEntry.fields
    .pageSectionParts[0] as TypeBlogs<undefined, string>;
  const unchainedSection2SearchBarData = pageSectionEntry.fields
    .pageSectionParts[1] as TypeSearchBar<undefined, string>;

  //STEP 1: ASYNC FETCHING OF ALL BLOGS DATA!
  const needAllBlogs = unchainedSection2BlogsData.fields.allBlogs;
  const blogsDataEntry = needAllBlogs && (await getAllBlogs());

  if (!blogsDataEntry) {
    return {
      blogs: [],
      searchBarData: {
        placeholder: unchainedSection2SearchBarData.fields.placeholder || "",
        optionsLabel: unchainedSection2SearchBarData.fields.optionsLabel || "",
        options: unchainedSection2SearchBarData.fields.options || [],
      },
    };
  }

  //STEP 2: FUNC THAT WILL PARSE OUR EACH BLOG CARD GIVING YOU EXACTLY THE NECESSARY INFO. SEE BLOGCARD TYPE ABOVE FOR EXACT DATA NEEDED
  const blogs = blogsDataEntry.items.map((blog) => parseBlogCard(blog));

  return {
    blogs,
    searchBarData: {
      placeholder: unchainedSection2SearchBarData.fields.placeholder || "",
      optionsLabel: unchainedSection2SearchBarData.fields.optionsLabel || "",
      options: unchainedSection2SearchBarData.fields.options || [],
    },
  };
}
