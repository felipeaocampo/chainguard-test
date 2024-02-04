import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCustomerTestimonialCardSkeleton } from "./TypeCustomerTestimonialCard";

export interface TypeCustomersSectionFields {
    pageSectionName: EntryFieldTypes.Symbol;
    selectTestimonials?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCustomerTestimonialCardSkeleton>>;
    selectCustomerLogos?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeCustomersSectionSkeleton = EntrySkeletonType<TypeCustomersSectionFields, "customersSection">;
export type TypeCustomersSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCustomersSectionSkeleton, Modifiers, Locales>;
