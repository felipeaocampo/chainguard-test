import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCustomerTestimonialCardFields {
    testimonialCardName: EntryFieldTypes.Symbol;
    customerName?: EntryFieldTypes.Symbol;
    titleposition?: EntryFieldTypes.Symbol;
    company?: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    testimonial?: EntryFieldTypes.Text;
    isPopUp?: EntryFieldTypes.Boolean;
    link?: EntryFieldTypes.Symbol;
}

export type TypeCustomerTestimonialCardSkeleton = EntrySkeletonType<TypeCustomerTestimonialCardFields, "customerTestimonialCard">;
export type TypeCustomerTestimonialCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCustomerTestimonialCardSkeleton, Modifiers, Locales>;
