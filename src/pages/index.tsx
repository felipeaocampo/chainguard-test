import { GetStaticProps } from "next";
import { Asset } from "contentful";
import { client } from "@/lib/client";
import Image from "next/image";
import {
  TypePageSection,
  TypePageSectionSkeleton,
} from "../../types/contentful";
import { fetchPageSection, fetchPageSections } from "@/lib/pageSection";
import { ContentImage } from "@/lib/contentImage";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

type typeTestA = keyof any;
// let typeTestB: TypePageSectionSkeleton;

console.log();

type HomePageFields = {
  pagesectionName: string;
  slug: string;
  primaryHeading: string;
  primarySubHeading: string;
  primaryCta: string;
  primaryImage: Asset;
  section1: Asset;
};

/*
{
  metadata: { tags: [] },
  sys: {
    space: [Object],
    id: '22R2pVpHpGDqooew2Nrb8i',
    type: 'Asset',
    createdAt: '2023-12-14T03:57:14.237Z',
    updatedAt: '2023-12-14T03:57:14.237Z',
    environment: [Object],
    revision: 1,
    locale: 'en-US'
  },
  fields: {
    title: 'Elastic Logo',
    description: 'Logo of Chainguard customer Elastic',
    file: [Object]
  }
}
*/

type TLogo = {
  metadata: { tag: [] };
  sys: {
    space: {};
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {};
    revision: number;
    locale: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
};

// type HomePageSkeleton = {
//   contentTypeId: "homePage";
//   fields: {
//     heading: Contentful.EntryFieldTypes.Text;
//     subHeading: Contentful.EntryFieldTypes.Text;
//     heroImage: Contentful.EntryFieldTypes.AssetLink;
//   };
// };

type HomePageProps = {
  heroHeading: string;
  heroSubHeading: string;
  heroImg: ContentImage;
};

// type ImgAsset = {
//   fields: {
//     title: string;
//     file: {
//       fileName: string;
//       contentType: string;
//       details: {
//         image: {
//           width: number;
//           height: number;
//         };
//         size: number;
//       };
//       url: string;
//     };
//     description: string;
//   };
// };

export default function Home({
  heroHeading,
  heroSubHeading,
  heroImg,
}: HomePageProps) {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-20 mb-3">{heroHeading}</h1>
        <h2 className="text-xl">{heroSubHeading}</h2>
        <Image
          src={`https:${heroImg.src}`}
          alt={heroImg.alt}
          width={heroImg.width}
          height={heroImg.height}
        />
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  // const res = await client.getEntries<TypePageSectionSkeleton>({
  //   content_type: "pageSection",
  //   include: 10,
  // });

  const page = await fetchPageSection({
    pagesectionName: "Home/Hero Section",
    preview: false,
  });

  if (!page) {
    return;
  }

  return {
    props: {
      heroHeading: page.primaryHeading,
      heroSubHeading: page.primarySubheading,
      heroImg: page.primaryImage,
    },
  };
};
