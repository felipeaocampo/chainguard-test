import { client } from "@/lib/client";
import Image from "next/image";
import { TypePageSection, TypePageSkeleton } from "@/../types/contentful";
import { parseContentfulPageSection } from "@/lib/pageSection";
import { ContentImage } from "@/lib/contentImage";
import Link from "next/link";
import { ButterBar } from "@/../types/SectionTypes";
import { assignSectionTypes } from "@/lib/assignSectionTypes";

type HomePageProps = {
  heroHeading: string;
  heroSubHeading: string;
  heroImg: ContentImage;
  butterBar: ButterBar;
  heroCta: string;
};

export default function Home({
  heroHeading,
  heroSubHeading,
  heroImg,
  butterBar,
  heroCta,
}: HomePageProps) {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="flex flex-col items-center">
        <aside>
          {butterBar.butterText}
          <Link href={butterBar.butterLink}>Read more</Link>
        </aside>
        <h1 className="text-5xl font-bold mt-20 mb-3">{heroHeading}</h1>
        <h2 className="text-xl">{heroSubHeading}</h2>
        <Link href="/contact">{heroCta}</Link>
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
  const page = await client.getEntries<TypePageSkeleton>({
    content_type: "page",
    include: 10,
  });

  // 1ST: ASSIGN TYPES TO EACH SECTION OF PAGE
  const section1Typed = assignSectionTypes<TypePageSection<undefined, string>>(
    page.items[0].fields.section1
  );

  //2ND: GET CONTENT FOR EACH PART OF SECTION SECTION
  const section1Data = parseContentfulPageSection(section1Typed);

  if (!section1Data) {
    return;
  }

  // console.log("Section: ", section1Data);

  //3RD: SET CONTENT INTO PROPS
  return {
    props: {
      heroHeading: section1Data.primaryHeading,
      heroSubHeading: section1Data.primarySubheading,
      heroImg: section1Data.primaryImage,
      heroCta: section1Data.primaryCta,
      butterBar: section1Data.butterBar,
    },
  };
};
