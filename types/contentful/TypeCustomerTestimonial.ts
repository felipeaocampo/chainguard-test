import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCustomerTestimonialFields {
    customerTestimonial?: EntryFieldTypes.Symbol;
    customerName?: EntryFieldTypes.Symbol;
    customerPosition?: EntryFieldTypes.Symbol;
    testimonialText?: EntryFieldTypes.Text;
    testimonialLogo?: EntryFieldTypes.AssetLink;
}

export type TypeCustomerTestimonialSkeleton = EntrySkeletonType<TypeCustomerTestimonialFields, "customerTestimonial">;
export type TypeCustomerTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCustomerTestimonialSkeleton, Modifiers, Locales>;
