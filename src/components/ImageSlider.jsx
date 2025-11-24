"use client";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSliderImg1 from "../../public/images/HeroSliderImg1.png"
import HeroSliderImg2 from "../../public/images/HeroSliderImg2.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
    return (
        <div className="w-full h-full bg-transparent px-2">
            <div className="">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 1300,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                >
                    <SwiperSlide>
                        <div className="slide-box">
                            <img src={HeroSliderImg1.src} alt="" className="rounded-2xl"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <img src={HeroSliderImg1.src} alt="" className="rounded-2xl" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <img src={HeroSliderImg1.src} alt="" className="rounded-2xl" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
}
