import { ContentImage } from "@/lib/contentImage";
import Image from "next/image";
import Link from "next/link";

export type OpenSourceSection2Props = {
  heading: string;
  customerLogos: ContentImage[];
};

export default function OpenSourceSection2({
  section2Props,
}: {
  section2Props: OpenSourceSection2Props;
}) {
  // console.log("NEW SECTION1 RAN! ", section1Props);
  return (
    <section
      className=" mb-[96px] max-w-[1152px] mx-auto"
      style={{ width: "min(90%, 1152px)" }}
    >
      <h1 className="uppercase tracking-[.64px] mb-[24px] text-[14px]">
        {section2Props.heading}
      </h1>
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
    </section>
  );
}
