import { ContentImage } from "@/lib/contentImage";
import { CustomerTestimonial } from "@/lib/homeSection2";
import { subcardListItem } from "@/lib/homeSection3";
import Image from "next/image";
import Link from "next/link";
import checkmark from "@/../public/images/checkbox-icon.svg";

export type HomeSection3Props = {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  subCardListItems: subcardListItem[];
};

export default function HomeSection3({
  section3Props,
}: {
  section3Props: HomeSection3Props;
}) {
  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px] w-1/2">
        <h3 className="text-[14px] uppercase tracking-[.64px] mb-[24px]">
          {section3Props.heading}
        </h3>
        <p className="text-[36px] font-semibold leading-[43.2px] mb-[12px]">
          {section3Props.subheading}
        </p>
        <p className="mb-[24px]">{section3Props.description}</p>
        <Link
          href={section3Props.ctaLink}
          className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[48px]"
        >
          {section3Props.ctaText}
        </Link>
        <div className="benefits-list-container">
          <ul>
            {section3Props.subCardListItems.map((benefitItem, i) => (
              <li
                key={`${benefitItem.subcardHeading}${i}`}
                className="mb-[24px]"
              >
                <div className="benefit-item-container flex gap-[10px]">
                  <div className="benefit-item-icon-wrapper">
                    <Image
                      src={checkmark}
                      alt="Chainguard checkmark icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="benefit-item-text-container leading-none">
                    <p className="font-medium mb-[10px]">
                      {benefitItem.subcardHeading}
                    </p>
                    <p className="text-[14px] text-cg-text-color-gray">
                      {benefitItem.subcardSubheading}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
