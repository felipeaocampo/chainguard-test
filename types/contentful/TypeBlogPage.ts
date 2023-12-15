import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogPageFields {
    blogTitle?: EntryFieldTypes.Symbol;
    blogAuthor?: EntryFieldTypes.Symbol;
    datePublished?: EntryFieldTypes.Date;
    blogTag?: EntryFieldTypes.Symbol;
    blogContent?: EntryFieldTypes.RichText;
    blogs?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeBlogPageSkeleton = EntrySkeletonType<TypeBlogPageFields, "blogPage">;
export type TypeBlogPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogPageSkeleton, Modifiers, Locales>;
