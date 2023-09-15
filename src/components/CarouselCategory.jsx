import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate, createSearchParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";




const CarouselCategory = () => {
  return (
    <div className="bg-white">
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        // navigation={true}
        // modules={[Navigation]}
      >
        <SwiperSlide>
        <img src={"../images/category_1.jpg"} alt="Amazon category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/category_2.jpg"} alt="Fashion category" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/category_3.jpg"} alt="Computers category" />
        </SwiperSlide>


        <SwiperSlide>
          <img src={"../images/category_4.jpg"} alt="Home category"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/category_5.jpg"} alt="Mobiles category" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCategory