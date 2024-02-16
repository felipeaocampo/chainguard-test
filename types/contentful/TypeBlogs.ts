import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogsFields {
    blogsPageName?: EntryFieldTypes.Symbol;
    allBlogs?: EntryFieldTypes.Boolean;
    featuredBlogs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeBlogsSkeleton = EntrySkeletonType<TypeBlogsFields, "blogs">;
export type TypeBlogs<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogsSkeleton, Modifiers, Locales>;
