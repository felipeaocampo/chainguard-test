//@ts-nocheck
import { slideCard } from "@/lib/homeSection4";
import Image from "next/image";
import React, { useEffect } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import "swiper/css";
import { Navigation } from "swiper/modules";
import checkmark from "@/../public/images/checkbox-icon.svg";

// register Swiper custom elements
register();

interface SliderProps {
  slides: slideCard[];
}

const MySlider: React.FC<SliderProps> = ({ slides }) => {
  useEffect(() => {
    // // Dynamically import Swiper
    // import("swiper").then((SwiperModule) => {
    //   new SwiperModule.default(".swiper-container", {
    //     // modules: [Navigation],
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //     // Swiper options
    //     slidesPerView: "auto",
    //     spaceBetween: 24,
    //   });
    // });
  }, []);

  //spaceBetween: 24

  return (
    <>
      <swiper-container
        slides-per-view="2.15"
        speed="500"
        css-mode="true"
        navigation="true"
        space-between="24"
      >
        {slides.map((slide, index) => (
          <swiper-slide key={index}>
            <div className="slide-img-container bg-hero-cg-gradient rounded-[8px] mb-[24px]">
              <Image
                src={`https:${slide.slideImg?.src}` || ""}
                alt={slide.slideImg?.alt || ""}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h5 className="mb-[5px] font-medium leading-[20px]">
              {slide.slideHeading}
            </h5>
            <p className="text-[14px] text-cg-text-color-gray">
              {slide.slideSubheading}
            </p>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
  // return (
  //   <div className="swiper-container">
  //     <div className="swiper-wrapper">
  //       {slides.map((slide, index) => (
  //         <div className="swiper-slide !w-[540px]" key={index}>
  //           <div className="slide-img-container bg-hero-cg-gradient rounded-[8px] mb-[24px]">
  //             <Image
  //               src={`https:${slide.slideImg?.src}` || ""}
  //               alt={slide.slideImg?.alt || ""}
  //               width={0}
  //               height={0}
  //               sizes="100vw"
  //               style={{ width: "100%", height: "auto" }}
  //             />
  //           </div>
  //           <h5 className="mb-[5px] font-medium leading-[20px]">
  //             {slide.slideHeading}
  //           </h5>
  //           <p className="text-[14px] text-cg-text-color-gray">
  //             {slide.slideSubheading}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //     <div className="swiper-button-next">
  //       <Image
  //         src={checkmark}
  //         alt="Chainguard checkmark icon"
  //         width={20}
  //         height={20}
  //       />
  //     </div>
  //     <div className="swiper-button-prev">
  //       <Image
  //         src={checkmark}
  //         alt="Chainguard checkmark icon"
  //         width={20}
  //         height={20}
  //       />
  //     </div>
  //   </div>
  // );
};

export default MySlider;
