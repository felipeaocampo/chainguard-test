import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeButterBarFields {
  pagesectionButterBar?: EntryFieldTypes.Symbol;
  butterBarText?: EntryFieldTypes.Symbol;
  butterBarLink?: EntryFieldTypes.Symbol;
}

export type TypeButterBarSkeleton = EntrySkeletonType<
  TypeButterBarFields,
  "butterBar"
>;
export type TypeButterBar<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeButterBarSkeleton, Modifiers, Locales>;
