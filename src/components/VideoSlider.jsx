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
            <div className="container mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    loop={true}  
                    autoplay={{
                        delay: 3000,     
                        disableOnInteraction: false, 
                        pauseOnMouseEnter: true
                    }}  
                >
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe  src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyMDExMjAyNQ" title="Saysri Vibrahire - Product Introduction video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-120 rounded-xl border-2 border-white"></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe  src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyMDExMjAyNQ" title="Saysri Vibrahire - Product Introduction video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-120 rounded-xl border-2 border-white"></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe  src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyMDExMjAyNQ" title="Saysri Vibrahire - Product Introduction video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-120 rounded-xl border-2 border-white"></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box">
                            <iframe  src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LEyMDExMjAyNQ" title="Saysri Vibrahire - Product Introduction video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-120 rounded-xl border-2 border-white"></iframe>
                        </div>
                    </SwiperSlide>

                     <div className="custom-pagination mt-8 flex justify-center"></div>
                </Swiper>
            </div>
        </div>

    );
}
