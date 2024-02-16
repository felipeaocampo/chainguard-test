import { ContentImage } from "@/lib/contentImage";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import Image from "next/image";
import Link from "next/link";

export type OpenSourceSection1Props = {
  heading: { id: string; content: string };
  subheading: string;
  description: string;
  pageSectionName: string;
  img: ContentImage | null;
  link: string;
  linkedText: string;
  unlinkedText: string;
};

export default function OpenSourceSection1({
  section1Props,
}: {
  section1Props: OpenSourceSection1Props;
}) {
  const inspectorProps = useContentfulInspectorMode();

  // console.log("NEW SECTION1 RAN! ", section1Props);
  return (
    <section
      className="flex flex-col items-center mb-[96px] pt-[180px] max-w-[1152px] mx-auto"
      style={{ width: "min(90%, 1152px)" }}
    >
      <h1
        className="uppercase tracking-[.64px] mb-[24px]"
        {...inspectorProps({
          entryId: section1Props.heading.id,
          fieldId: "heading",
        })}
      >
        {section1Props.heading.content}
      </h1>
      <h2 className="text-[36px] font-semibold mb-[12px] w-[700px] leading-[53px] text-center">
        {section1Props.subheading}
      </h2>
      <p className="text-[18px] mb-[36px]">{section1Props.description}</p>
      <Link
        href={section1Props.link}
        className="mb-[96px] py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all"
      >
        {section1Props.linkedText}
      </Link>
      {section1Props.img && (
        <Image
          src={`https:${section1Props.img.src}`}
          alt={section1Props.img.alt}
          width={section1Props.img.width}
          height={section1Props.img.height}
        />
      )}
    </section>
  );
}
