import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGeneralContentCardFields {
    pageSectionName: EntryFieldTypes.Symbol;
    heading?: EntryFieldTypes.Symbol;
    subheading?: EntryFieldTypes.Symbol;
    descriptionText?: EntryFieldTypes.Text;
    media?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    ctas?: EntryFieldTypes.Object;
    floatingHeaderText?: EntryFieldTypes.Object;
    list?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeGeneralContentCardSkeleton = EntrySkeletonType<TypeGeneralContentCardFields, "generalContentCard">;
export type TypeGeneralContentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGeneralContentCardSkeleton, Modifiers, Locales>;
