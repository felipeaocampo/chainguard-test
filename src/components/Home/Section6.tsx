import Link from "next/link";

export type HomeSection6Props = {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export default function HomeSection6({
  section6Props,
}: {
  section6Props: HomeSection6Props;
}) {
  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="section-2-header-text w-1/2">
        <h3 className="text-[36px] font-semibold leading-[43.2px] mb-[12px]">
          {section6Props.heading}
        </h3>
        <p className="mb-[24px]">{section6Props.subheading}</p>
        <Link
          href={section6Props.ctaLink}
          className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[48px]"
        >
          {section6Props.ctaText}
        </Link>
      </div>
      <div className="divider-line pt-[96px]"></div>
    </section>
  );
}
