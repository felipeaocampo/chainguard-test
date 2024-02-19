import Link from "next/link";
import Image from "next/image";
import { ContentImage } from "@/lib/contentImage";
import { HomePageProps } from "@/pages";
import gql from "graphql-tag";

export type HomeSection1Props = {
  heroHeading: string;
  heroSubHeading: string;
  heroImg: ContentImage;
  heroCtaLink: string;
  heroCtaText: string;
  floatingHeaderLink: string;
  floatingHeaderText: string;
};

export const GetPageNamesDocument = gql`
  query getPageNames {
    generalPageCollection {
      items {
        pageName
      }
    }
  }
`;

export default function HomeSection1({
  section1Props,
}: {
  section1Props: HomeSection1Props;
}) {
  const linkedTextStartingIndex =
    section1Props.floatingHeaderText.indexOf("Read more");
  const nonLinkFloatingText = section1Props.floatingHeaderText.slice(
    0,
    linkedTextStartingIndex
  );
  const linkedFloatingText = section1Props.floatingHeaderText.slice(
    linkedTextStartingIndex
  );

  return (
    <section
      className="flex flex-col items-center mb-[96px] pt-[180px] max-w-[1152px] mx-auto"
      style={{ width: "min(90%, 1152px)" }}
    >
      <aside className="mb-[24px] text-[14px] py-[8px] px-[15px] border border-solid rounded-[100px]">
        <p className="flex gap-[6px]">
          {nonLinkFloatingText}
          <Link
            href={`/unchained${section1Props.floatingHeaderLink}`}
            className="text-cg-text-blue hover:text-cg-hover-btn-bg-blue"
          >
            {linkedFloatingText}
          </Link>
        </p>
      </aside>
      <h1 className="text-[48px] font-semibold mb-[12px] w-[500px] leading-[53px] text-center">
        {section1Props.heroHeading}
      </h1>
      <h2 className="text-[18px] mb-[36px]">{section1Props.heroSubHeading}</h2>
      <Link
        href={section1Props.heroCtaLink}
        className="mb-[96px] py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all"
      >
        {section1Props.heroCtaText}
      </Link>
      <Image
        src={`https:${section1Props.heroImg.src}`}
        alt={section1Props.heroImg.alt}
        width={1152}
        height={section1Props.heroImg.height}
      />
    </section>
  );
}
