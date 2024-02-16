import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSectionSkeleton } from "./TypePageSection";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";

export interface TypeGeneralPageFields {
    pageName: EntryFieldTypes.Symbol;
    pageSlug: EntryFieldTypes.Symbol;
    pageMetadata: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
    pageSection?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSectionSkeleton>>;
}

export type TypeGeneralPageSkeleton = EntrySkeletonType<TypeGeneralPageFields, "generalPage">;
export type TypeGeneralPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGeneralPageSkeleton, Modifiers, Locales>;
