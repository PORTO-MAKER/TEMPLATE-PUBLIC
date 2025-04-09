"use client";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ datas }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-[500px]"
        >
            <SwiperSlide>
                <img
                    src={datas[0]}
                    alt="Slide 1"
                    className="object-cover rounded-lg w-full h-full"
                />
            </SwiperSlide>
            <SwiperSlide>
                <iframe
                    src={datas[1]}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
