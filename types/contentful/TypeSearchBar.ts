import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSearchBarFields {
    searchBarName?: EntryFieldTypes.Symbol;
    placeholder?: EntryFieldTypes.Symbol;
    optionsLabel?: EntryFieldTypes.Symbol;
    options?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeSearchBarSkeleton = EntrySkeletonType<TypeSearchBarFields, "searchBar">;
export type TypeSearchBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSearchBarSkeleton, Modifiers, Locales>;
