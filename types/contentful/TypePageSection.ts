import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePageSectionFields {
    pagesectionName?: EntryFieldTypes.Symbol;
    primaryHeading?: EntryFieldTypes.Symbol;
    primarySubheading?: EntryFieldTypes.Symbol;
    primaryParagraphText?: EntryFieldTypes.Symbol;
    primaryCta?: EntryFieldTypes.Symbol;
    secondaryCta?: EntryFieldTypes.Symbol;
    primaryImage?: EntryFieldTypes.AssetLink;
    otherImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    secondaryTextContent?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    blogs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    labs?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    newsroomArticles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    cards?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    form?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    slider?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    customerLogosBar?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    staffHeadshots?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    impressiveNumbersBar?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    tabPanel?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    accordion?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    infiniteMarquee?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    butterBar?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypePageSectionSkeleton = EntrySkeletonType<TypePageSectionFields, "pageSection">;
export type TypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSectionSkeleton, Modifiers, Locales>;
