import { subcardListItem } from "@/lib/homeSection3";
import { benefitsCard } from "@/lib/homeSection5";
import Image from "next/image";
import Link from "next/link";

export type HomeSection5Props = {
  heading: string;
  subheading: string;
  description: string;
  benefitsCards: benefitsCard[];
};

export default function HomeSection5({
  section5Props,
}: {
  section5Props: HomeSection5Props;
}) {
  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px] w-1/2">
        <h3 className="text-[14px] uppercase tracking-[.64px] mb-[24px]">
          {section5Props.heading}
        </h3>
        <p className="text-[36px] font-semibold leading-[43.2px] mb-[12px]">
          {section5Props.subheading}
        </p>
        <p className="mb-[24px]">{section5Props.description}</p>
      </div>
      <div className="benefits-list-container">
        <ul className="flex gap-[24px]">
          {section5Props.benefitsCards.map((benefitItem) => (
            <li key={benefitItem.benefitsHeading} className="mb-[24px]">
              <div className="benefit-item-container">
                <div className="benefit-item-icon-wrapper mb-[12px]">
                  <Image
                    src={`https://${benefitItem.benefitsIcon?.src}` || ""}
                    alt="Chainguard checkmark icon"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-medium mb-[5px]">
                  {benefitItem.benefitsHeading}
                </p>
                <p className="text-[14px] text-cg-text-color-gray">
                  {benefitItem.benefitsSubheading}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
