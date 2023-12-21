import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePageFields {
  pageName: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  section1: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section2?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section3?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section4?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section5?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section6?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section7?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  section8?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePageSkeleton, Modifiers, Locales>;

type Test = Entry<TypePageSkeleton, undefined, string>;
