import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCustomerLogosBarFields {
    entryName?: EntryFieldTypes.Symbol;
    logoImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeCustomerLogosBarSkeleton = EntrySkeletonType<TypeCustomerLogosBarFields, "customerLogosBar">;
export type TypeCustomerLogosBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCustomerLogosBarSkeleton, Modifiers, Locales>;
