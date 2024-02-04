import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoMetadataFields {
    pageTitle: EntryFieldTypes.Symbol;
    metaDescription: EntryFieldTypes.Symbol;
    favicon: EntryFieldTypes.AssetLink;
}

export type TypeSeoMetadataSkeleton = EntrySkeletonType<TypeSeoMetadataFields, "seoMetadata">;
export type TypeSeoMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoMetadataSkeleton, Modifiers, Locales>;
