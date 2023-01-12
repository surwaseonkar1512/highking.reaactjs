import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import avatar from "../assets/m1.jpeg";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import m6 from "../assets/m6.png";
import m7 from "../assets/m7.png";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.jpg";
import r6 from "../assets/r6.jpg";

const Review = () => {
  return (
    <section className="text-center  bg-Hero bg-cover bg-fixed  ">
      <p className="text-dark mt-10  text-7xl">Gallery</p>
      <p className="text-dark mt-10  text-2xl"> Heaven on earth</p>
      <div className="my-6">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20"
        >
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            > <img src={r2} alt="avatar" className="w-full h-full mx-auto " />
           
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r3} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r4} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r5} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r6} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r2} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r5} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r4} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r6} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r3} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={r2} alt="avatar" className="w-full h-full mx-auto" />
             
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
