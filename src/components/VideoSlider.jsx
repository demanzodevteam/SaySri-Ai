"use client";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
    return (
        <div className="w-full py-12 bg-[#E8E8E8]/16">
            <div className="container mx-auto space-y-6">
                <h1 className="text-center">Product Introduction</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe
                                width="606"
                                height="528"
                                src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyNDExMjAyNQ"
                                title="Saysri Vibrahire - Product Introduction video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-100 rounded-xl border-2 border-white"
                            ></iframe>                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe
                                width="606"
                                height="528"
                                src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyNDExMjAyNQ"
                                title="Saysri Vibrahire - Product Introduction video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-100 rounded-xl border-2 border-white"
                            ></iframe>                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe
                                width="606"
                                height="528"
                                src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyNDExMjAyNQ"
                                title="Saysri Vibrahire - Product Introduction video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-100 rounded-xl border-2 border-white"
                            ></iframe>                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe
                                width="606"
                                height="528"
                                src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyNDExMjAyNQ"
                                title="Saysri Vibrahire - Product Introduction video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-100 rounded-xl border-2 border-white"
                            ></iframe>                        </div>
                    </SwiperSlide>
                   
                    <div className="custom-pagination mt-8 flex justify-center"></div>
                    <div className="swiper-button-prev !w-8 !h-8 "></div>
                    <div className="swiper-button-next !w-8 !h-8"></div>
                </Swiper>
            </div>
        </div>

    );
}
