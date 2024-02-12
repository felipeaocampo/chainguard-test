import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTestContentFields {
    name?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    blog?: EntryFieldTypes.RichText;
}

export type TypeTestContentSkeleton = EntrySkeletonType<TypeTestContentFields, "testContent">;
export type TypeTestContent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTestContentSkeleton, Modifiers, Locales>;
