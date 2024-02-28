"use client";

// Third Party
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// Constants
const TIMEOUT = 3000;

export default function Slider({ slides }) {
  return (
    <Swiper speed={500} loop={true} slidesPerView={1} modules={[Navigation]}>
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            <Image
              src={slide?.image}
              alt="Mii"
              width={500}
              height={500}
              className="h-[400px] w-full object-contain"
            />
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-pretty whitespace-pre-line">
                {slide?.title}
              </h1>
              <p>{slide?.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
