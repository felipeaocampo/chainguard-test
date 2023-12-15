import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCustomerTestimonialsFields {
    entryName?: EntryFieldTypes.Symbol;
    testimonials?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeCustomerTestimonialsSkeleton = EntrySkeletonType<TypeCustomerTestimonialsFields, "customerTestimonials">;
export type TypeCustomerTestimonials<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCustomerTestimonialsSkeleton, Modifiers, Locales>;
