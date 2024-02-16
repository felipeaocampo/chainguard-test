import {
  TypeBlog,
  TypeBlogs,
  TypeGeneralContentCard,
  TypePageSection,
} from "@/../types/contentful";
import { BlogCard } from "./unchainedSection1";
import { parseContentfulContentImage } from "../contentImage";

export const parseBlogCard = (blog: TypeBlog<undefined, string>): BlogCard => {
  return {
    title: blog.fields.blogName || "",
    slug: blog.fields.blogSlug || "",
    authors: blog.fields.authors || [],
    cardImg: parseContentfulContentImage(blog.fields.mainImage),
    category: blog.fields.tags || [],
    about: blog.fields.metaAbout || "",
    content: blog.fields.blogContent,
    datePublished: blog.fields.datePublished || "",
  };
};
