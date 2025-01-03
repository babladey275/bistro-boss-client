import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <h3 className="absolute text-3xl uppercase text-center -mt-16 ml-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide2} alt="" />
          <h3 className="absolute text-3xl uppercase text-center -mt-16 ml-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide3} alt="" />
          <h3 className="absolute text-3xl uppercase text-center -mt-16 ml-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide4} alt="" />
          <h3 className="absolute text-3xl uppercase text-center -mt-16 ml-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide5} alt="" />
          <h3 className="absolute text-3xl uppercase text-center -mt-16 ml-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
