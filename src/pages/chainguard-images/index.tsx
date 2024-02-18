import { GetStaticProps } from "next";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { GeneralContentCard, GeneralPage } from "@/schema";

const query = `
query {
  openSourcePageData: generalPage(id: "6nhKPVtrhOpI6NQ9FGv8ia") {
     pageName
     pageSectionCollection(limit: 10) {
       items {
         pageSectionPartsCollection(limit: 10) {
           items {
             ... on GeneralContentCard {
               sys {
                 id
               }
               heading
               subheading
               descriptionText
               mediaCollection(limit: 10) {
                 items {
                   url
                   description
                   width
                   height
                 }
               }
               ctas 
             }
           }
         }
       }
     }
   }
 }
`;

type ChainguardImagesProps = {
  openSourcePageData: GeneralPage;
};

export default function ChainguardImagesPage({
  openSourcePageData,
}: ChainguardImagesProps) {
  const x = openSourcePageData.pageName;
  const u = openSourcePageData.pageSectionCollection?.items[0]
    ?.pageSectionPartsCollection?.items[0] as GeneralContentCard;

  console.log("PAGE: ", openSourcePageData);
  return <h1>{u.heading}Page</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await res.json();

  console.log("DATA: ", data);

  return {
    props: {
      openSourcePageData: data.data.openSourcePageData,
    },
  };
};
