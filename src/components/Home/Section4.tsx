import { ContentImage } from "@/lib/contentImage";
import { slideCard } from "@/lib/homeSection4";
import Image from "next/image";
import Link from "next/link";
import MySlider from "../MySlider";

export type HomeSection4Props = {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  sliderCards: slideCard[];
};

export default function HomeSection4({
  section4Props,
}: {
  section4Props: HomeSection4Props;
}) {
  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px] w-1/2">
        <h3 className="text-[14px] uppercase tracking-[.64px] mb-[24px]">
          {section4Props.heading}
        </h3>
        <p className="text-[36px] font-semibold leading-[43.2px] mb-[12px]">
          {section4Props.subheading}
        </p>
        <p className="mb-[24px]">{section4Props.description}</p>
        <Link
          href={section4Props.ctaLink}
          className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[48px]"
        >
          {section4Props.ctaText}
        </Link>
      </div>
      <MySlider slides={section4Props.sliderCards} />
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
