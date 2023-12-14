import { GetStaticProps } from "next";
import { Asset } from "contentful";
import { client } from "@/lib/client";
import Image from "next/image";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

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
  heroImgUrl: string;
  heroImgWidth: number;
  heroImgHeight: number;
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
  heroImgUrl,
  heroImgWidth,
  heroImgHeight,
}: HomePageProps) {
  // console.log("HEADING: ", heroHeading);
  // console.log("SUBHEADING: ", heroSubHeading);
  // console.log("IMG URL: ", heroImgUrl);
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="flex flex-col items-center">
        {/* <h1 className="text-5xl font-bold mt-20 mb-3">{heroHeading}</h1> */}
        {/* <h2 className="text-xl">{heroSubHeading}</h2> */}
        <Image
          // src={`https:${heroImgUrl}`}
          src=""
          alt="Test"
          width={1150}
          height={468}
        />
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries<{
    fields: HomePageFields;
    contentTypeId: "page";
  }>({
    content_type: "page",
    include: 2,
  });

  // @ts-ignore
  const test = res.items[0].fields;

  console.log("TEST: ", test);

  const { primaryHeading } = res.items[0].fields;
  // const { subHeading } = res.items[0].fields;
  // // @ts-ignore
  // const { url, details } = res.items[0].fields.heroImage.fields.file;
  // const { width, height } = details.image;

  return {
    props: {
      // heroHeading: heading,
      // heroSubHeading: subHeading,
      // heroImgUrl: url,
      // heroImgWidth: width,
      // heroImgHeight: height,
    },
  };
};
