import * as Contentful from "contentful";

type HomePageSkeleton = {
  contentTypeId: "homePage";
  fields: {
    heading: Contentful.EntryFieldTypes.Text;
    subHeading: Contentful.EntryFieldTypes.Text;
    heroImage: Contentful.EntryFieldTypes.AssetLink;
  };
};

const client = Contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENT_DELIVERY_ACCESS_TOKEN,
});

type HomePageProps = {
  heroHeading: string;
  heroSubHeading: string;
  heroImgUrl: string;
};

type ImgAsset = {
  fields: {
    title: string;
    file: {
      fileName: string;
      contentType: string;
      details: {
        image: {
          width: number;
          height: number;
        };
        size: number;
      };
      url: string;
    };
    description: string;
  };
};

export default function Home({
  heroHeading,
  heroSubHeading,
  heroImgUrl,
}: HomePageProps) {
  return (
    <main>
      <h1>{heroHeading}</h1>
    </main>
  );
}

export async function getStaticProps() {
  const entry = await client.getEntries<HomePageSkeleton>({
    content_type: "homePage",
  });
  const test = entry.items[0].fields.heroImage;
  console.log("HERO: ", test);
  // console.log("TEST: ", entry.items[0].fields!["file"]["url"]);
  // logs the entry metadata
  // console.log(`SYS: `, entry.sys);

  // logs the field with ID title
  // console.log(`FIELDS: `, entry.fields);

  // console.log(`IMG FILE: `, entry.fields.heroImage);

  return {
    props: {
      // heroHeading: entry.fields.heading,
      // heroSubHeading: entry.fields.subHeading,
      // heroImgUrl: entry?.fields?.heroImage?.fields?.file.url,
    },
  };
}
