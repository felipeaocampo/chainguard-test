import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    blogName?: EntryFieldTypes.Symbol;
    blogSlug?: EntryFieldTypes.Symbol;
    metaAbout?: EntryFieldTypes.Text;
    authors: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    mainImage: EntryFieldTypes.AssetLink;
    datePublished?: EntryFieldTypes.Date;
    blogContent?: EntryFieldTypes.RichText;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
