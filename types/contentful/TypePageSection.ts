import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogsSkeleton } from "./TypeBlogs";
import type { TypeCustomersSectionSkeleton } from "./TypeCustomersSection";
import type { TypeGeneralContentCardSkeleton } from "./TypeGeneralContentCard";

export interface TypePageSectionFields {
    pageSectionName: EntryFieldTypes.Symbol;
    pageSectionParts: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogsSkeleton | TypeCustomersSectionSkeleton | TypeGeneralContentCardSkeleton>>;
}

export type TypePageSectionSkeleton = EntrySkeletonType<TypePageSectionFields, "pageSection">;
export type TypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSectionSkeleton, Modifiers, Locales>;
