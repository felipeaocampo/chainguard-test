import { ContentImage } from "@/lib/contentImage";
import { CustomerTestimonial } from "@/lib/homeSection2";
import Image from "next/image";
import Link from "next/link";

export type HomeSection2Props = {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  customerLogos: ContentImage[];
  customerTestimonials: CustomerTestimonial[];
};

export default function HomeSection2({
  section2Props,
}: {
  section2Props: HomeSection2Props;
}) {
  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px]">
        <h3 className="text-[14px] uppercase tracking-[.64px] mb-[24px]">
          {section2Props.heading}
        </h3>
        <p className="text-[36px] font-semibold leading-[43.2px]">
          {section2Props.subheading}
        </p>
      </div>
      <div className="testimonial-cards-container flex gap-[22px] w-full mb-[48px]">
        {section2Props.customerTestimonials.map((testimonialCardData, i) => {
          if (
            !testimonialCardData?.testimonialLogo.src ||
            !testimonialCardData?.testimonialLogo.alt
          ) {
            return (
              <div className="testimonial-card w-[50%] p-[48px]" key={i}>
                <div className="testimonial-img-container">
                  Image failed to load...
                </div>
              </div>
            );
          }

          return (
            <div
              className="group testimonial-card w-[50%] p-[48px] border border-solid rounded-[8px]"
              key={i}
            >
              <div className="testimonial-img-container mb-[24px]">
                <Image
                  src={`https:${testimonialCardData?.testimonialLogo.src}`}
                  alt={testimonialCardData?.testimonialLogo.alt}
                  width={96}
                  height={testimonialCardData.testimonialLogo.height}
                />
              </div>
              <p className="mb-[24px] h-[72px] overflow-y-clip relative after:content-['...'] after:bottom-0 after:right-0 after:translate-x-[-10px] after:absolute">
                {testimonialCardData.testimonial}
              </p>
              <div className="testimonial-card-bottom flex justify-between">
                <div className="testimonial-user flex flex-col">
                  <p>{testimonialCardData.customerName}</p>
                  <p>{testimonialCardData.titleposition}</p>
                </div>
                <Link
                  href="#"
                  className="py-[12px] px-[24px] bg-white text-cg-text-blue border border-solid border-cg-btn-border-light-blue rounded-[4px] group-hover:text-white group-hover:bg-cg-hover-btn-bg-blue transition-all"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="customer-logos-container flex gap-[32px] mb-[24px]">
        {section2Props.customerLogos.map((customerLogo) => (
          <Image
            key={customerLogo.alt}
            src={customerLogo.src}
            alt={customerLogo.alt}
            width={103}
            height={100}
          />
        ))}
      </div>
      <Link
        href={section2Props.ctaLink}
        className="text-cg-text-blue my-[24px] block"
      >
        {section2Props.ctaText}
      </Link>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
