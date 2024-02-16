import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogsSkeleton } from "./TypeBlogs";
import type { TypeCustomersSectionSkeleton } from "./TypeCustomersSection";
import type { TypeGeneralContentCardSkeleton } from "./TypeGeneralContentCard";
import type { TypeSearchBarSkeleton } from "./TypeSearchBar";

export interface TypePageSectionFields {
    pageSectionName: EntryFieldTypes.Symbol;
    pageSectionParts: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogsSkeleton | TypeCustomersSectionSkeleton | TypeGeneralContentCardSkeleton | TypeSearchBarSkeleton>>;
}

export type TypePageSectionSkeleton = EntrySkeletonType<TypePageSectionFields, "pageSection">;
export type TypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSectionSkeleton, Modifiers, Locales>;
